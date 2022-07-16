require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');
const puppeteer = require('puppeteer');

// const client = new Discord.Client({
//     intents: ['GUILDS', 'GUILD_MESSAGES']
// });

// client.once('ready',async() => {
//     cron.schedule(
//         '0 */30 * * * *',
//         async () => await checkDidUpdate(),
//         {
//             timezone: "Asia/Tokyo"
//         }
//     );
// })

// client.login();

checkDidUpdate();

async function checkDidUpdate() {
    try {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        const homepageUrl = 'https://www.creephyp.com/futokyakuclub/';
        await page.goto(homepageUrl);

        const blogs = await page.$eval('.list--blog > li',item => item.appendChild);
        console.log(blogs);

    } catch (error) {
        console.log(error);
    }
}