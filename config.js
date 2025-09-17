const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNrWHJpOTR5K3doMVQxUVI3dDNGVTAyTGxLdW5HZ2tXK05Yd3FHY3puaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnNNTUpkLzFUOVdaMTB1MGh1MnFGb3ZoUUE3enNwbm9UL21Ed2xlOEJuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0R2JqZGlwMUl2MUE2ZUlrUWwvZFdBRzl5Qk5RQjZkWVZWVEpjZnJWTTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6QThEY0xQemJidVM2UWdOVzBUc0dvR1RzQmhPM0JQUHlMUHVzdU0veVF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Bb25XazJMRE53dXFZMDUrdEIzRkZWMzhJcEcvb3NWK2tHeHk0dmZBMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloxRGJONXZZODNReG91MnBFeUhBdURTSGdOL2dtekc2QUhXQjh5OEVsUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lIM3JqRk14ZThQQVRJYk1NY3FFTFh0VjhVaUxWM3pxeERiZGo2Z1cyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXU2a0cralNBdnZOWlBvdlQvVHZ4MVRaRUhxZzYvUXJ3S1N2UGFRSGJ5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCSzlRVjV2QnpQWm9BUDNOaTh5QTYzTUR6ZW1SeXF0TGVYNFV2dWVzcU1rYlVLTGR5bVgvYnc2VjYzNWUzL1o5Q2pkZXY3MHY4eUVldytOQytMNWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IlpqTjNwUnU2L0lwNUxabHVMbk9kMVMyVzRFRFJybjd4V3ZiNU9OTTNKV2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtqajhUZWlFUldTc24xb1g2MHFYYUEiLCJwaG9uZUlkIjoiYTRkYjUwZWMtYzRiMi00ZjJkLTg3ZjYtNTU2M2FhMDY5NDNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZqdGVMRGdCdEZPSnc3U0VPc21ib2xBNzZBOD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzZueWRuRk9ZaEhKUk5HeGFPN3VaaFVTaDdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHp6K1lNR0VMV3pxc1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS09WMDBZSzBRUlhlT1BzaVlNREx0b3RTcXV6d0hRdjV1VWkycVlkdzJqZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTWZyZlFKUWFYUWxRWEhPMGNaOFJiZTB1c1Q5bW9QUmNkNFJySFhUbDVKd000c1lXaTJHcElyc1JPN0hXT1lxM2s4Z0E5ZUpHblErbFNDdmhJTEtDQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik45M0RGMm9lMzhHcTBKM3hVai9kZzhqM011S0FBU1pHTmRsRHdMZEhEMlRSTDdnR1I4Y2JpbG5vMEhJdHRPVUZ6WU9pZ2Q1RHdlQmkzYU1lcVd6a2pnPT0ifSwibWUiOnsiaWQiOiI5NDc0MDM1OTUwMToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE2MDcyMTExOTQ3OTYwOjFAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwMzU5NTAxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2psZE5HQ3RFRVYzamo3SW1EQXk3YUxVcXJzOEIwTCtibEl0cW1IY05vNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MTA4MDk5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈 🤖*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://qu.ax/Pusls.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94770025374",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Imesh S Abeysinghe",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://qu.ax/Pusls.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈*🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94725535900",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
