require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port;
const puppeteer = require("puppeteer");
app.use(express.json());

let myPictures = [];
async function scraper(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const images = await page.$$eval("img", imgs =>
    imgs.map(img => ({
      imageSrc: img.getAttribute("src"),
      imageAlt: img.getAttribute("alt"),
      imageWidth: img.naturalWidth,
      imageHeight: img.naturalHeight,
      ratio: Math.round((img.naturalWidth / img.naturalHeight) * 100) / 100,
    }))
  );
  myPictures = images;
  console.log(myPictures);
  await browser.close();
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.post("/puppeteer", async (req, res) => {
  let link = req.body.url;
  await scraper(link);
  res.status(200).json({ images: myPictures });
});
