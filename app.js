//import dependencies
const puppeteer = require('puppeteer');
const moment = require('moment');
const fs = require('fs');

(async () => {

    //The location (url)
    const url = 'https://aqicn.org/city/usa/newyork/';

    //create browser
    const browser = await puppeteer.launch({
        headless: true
        //set headless to false for debugging so you can see browser *
    });

    //Navigate to website
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "load" });

    //Get the Air quality index
    const aqi = await page.$('aqiwgtvalue');
})();
