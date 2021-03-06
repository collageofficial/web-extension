const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const puppeteer = require("puppeteer");
app.use(express.json());
let myPictures = [];

//fix for pages that have a long spinner. put inside slowPages with spinner DOMAIN.COROMAIN
const slowPages = [
  "vsco.co"
]
let checkLocation = (url) => {
  const regex = /(?:([^\:]*)\:\/\/)?(?:([^\:\@]*)(?:\:([^\@]*))?\@)?(?:([^\/\:]*)\.(?=[^\.\/\:]*\.[^\.\/\:]*))?([^\.\/\:]*)(?:\.([^\/\.\:]*))?(?:\:([0-9]*))?(\/[^\?#]*(?=.*?\/)\/)?([^\?#]*)?(?:\?([^#]*))?(?:#(.*))?/gm
  location = regex.exec(url)
  return`${location[5]}.${location[6]}`
}

//PUPPETEER
let scraper = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url, {
    waitUntil:"load",
    timeout:0
  });

  //check. if it is one of those pages with spinner it is giving the function a timeout
  let myTimeOut = 0
  if(slowPages.includes(checkLocation(url))){
    myTimeOut = 3000
  } 

  setTimeout(async () => {
    const images = await page.$$eval("img", imgs =>
    imgs.map(img => ({
      imageSrc: (
        img.getAttribute("data-lazy-src") 
        || img.getAttribute("data-src") 
        || img.getAttribute("src")),
      imageAlt: img.getAttribute("alt"),
      imageWidth: img.naturalWidth,
      imageHeight: img.naturalHeight,
      ratio: (img.naturalWidth / img.naturalHeight).toFixed(2),
    }))
  );
  myPictures = await images.filter(img => img.imageSrc && img.imageWidth > 100 && img.imageHeight > 100);
  console.log(myPictures);
  await browser.close();
  },myTimeOut)
  }

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res)=>res.send("hello from endpoint"))

app.post("/", async (req, res) => {
  let link = req.body.url;
  await scraper(link);
  res.status(200).json({ images: myPictures });
});
