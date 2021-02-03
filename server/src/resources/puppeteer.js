const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer')

let myPictures=[]

async function scraper(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()
  await page.goto(url);
  const images = await page.$$eval('img', imgs => imgs.map(img => ({
    imageSrc: img.getAttribute('src'),
    imageAlt: img.getAttribute('alt'),
    imageWidth: img.naturalWidth,
    imageHeight: img.naturalHeight,
    ratio: Math.round((img.naturalWidth/img.naturalHeight * 100))/ 100,
  })));
  myPictures=images
  console.log(myPictures)
  await browser.close()
}


router.post('/', async (req, res) =>{
    let link=req.body.url
    await scraper(link)
    res.status(200).json({images: myPictures})
})
        

module.exports = router
