require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');


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

    } catch (error) {
        console.log(error);
    }
}