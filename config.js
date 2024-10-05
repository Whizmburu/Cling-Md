const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Josphat/cling-md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BGhx4RFgaODJhD0TsYd2fl";
global.website=process.env.GURL || "https://chat.whatsapp.com/BGhx4RFgaODJhD0TsYd2fl" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"; // SET LOGO FOR IMAGE

global.devs = "254754783683" // Developer Contact (your number)
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254754783683";

//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5';
global.flush = process.env.FLUSH   || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm  = process.env.WELCOME || "true";  

global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false"; 
global.userImages= process.env.USER_IMAGES|| "text";
global.waPresence= process.env.WAPRESENCE || "available";

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254754783683";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254754783683";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://cling-md-vtf.onrender.com/";

module.exports = {
  menu: process.env.MENU || "", 
  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©CLING-MD", 
  author : process.env.PACK_AUTHER || "Josphat",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "CLING-MD",
  ownername:process.env.OWNER_NAME|| "Josphat",

  sessionName:process.env.SESSION_ID || "",  
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME || "",
  antilink_values:process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "CLING",
};

global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update'${__filename}'`); delete require.cache[file]; require(file); });
