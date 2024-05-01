const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/whizmburu/Cling-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/L1DzziySDqdLWibrD2R1J7";
global.website=process.env.GURL || "https://chat.whatsapp.com/L1DzziySDqdLWibrD2R1J7" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/481296919746f56820d40.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254754783683" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254754783683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254754783683";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254754783683,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©𓅓𝙒𝞖𝞘𝙕𓅓" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Whiz²²¹-ᴍᴅ 』```",
  author : process.env.PACK_AUTHER|| "𓅓𝙒𝞖𝞘𝙕𓅓",
  packname: process.env.PACK_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  botname : process.env.BOT_NAME  || "𓅓𝙒𝞖𝞘𝙕𓅓",
  ownername:process.env.OWNER_NAME|| "𓅓𝙒𝞖𝞘𝙕𓅓",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_11_02_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVU9wWGdlMStsSWFYdVlqUTR0emJ6a3d5ZnZnNjlTZWt2b2M4a3l2N2RYST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZrZWtWV2pwTWZXNit4dG9KRXVSVVBFdFJ0NDNvYlh3SDZPanVGNEhBbmM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0tZNE13ZkRsenplaFlYU1N5NitLRllXbVBKV1VjODhUcDdGUVMvRUtYST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIndMeVV5d28rQUhHV3RqaktReVVrK3JNWjc2Yi9nZFdET2JuYkg0enRYd1E9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUU0cXZzU3cxYnlRWXJNQ0J2empuN21KRXdqNTk4MER0di9wVTZnZXEzRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVHQlhDeHpsc3JDNkJ4T2hhSllWS2M3U21ZRUNHUHFJR1ZDUzFBSzFheTQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrTWdUc0cxRzRTQ0gzSmp4dzRwWUVxcVc4UlFHMk1ZNWk5cmF4eHJ6aEd3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiamJ3S0RCK2hxQXh1WGhZVGUyWldIazh1bnF4UFc2UjkrOUZhUkdmWFpGaz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1ckFVMDNCamhTaUdWa2R3VFB4Q2tsa3FsQ3FXUVRRQXU2anpMd0FwdGNkU3dxOXN4ZFQyT0lUVkVtNHRKM0NVeGthS2pqTTdoTzY4OXY2Y1pYcTZqZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTk3LFwiYWR2U2VjcmV0S2V5XCI6XCI0NlR4TW12clNkc25MSXRjV284RXlWZXpqYjY2MmZQUU1ma1VtbGFJaU1zPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiWkRYOENXcVlTUHlHOHBFTWFQOXNVQVwiLFwicGhvbmVJZFwiOlwiMjY5ZjNjZDYtMzE2ZS00OTMwLWExZmItZTg5NGQyYmY3YmI2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIzUjB3ZnUreE1KS2F5UkxnVHNXc2p4ZzlYRzg9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRNaXlmWTZRbSthRk9PdjQ1NnIzTkdTKzh0ND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDS1B5bXI0RkVLT3k5cTRHR0NFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIm52dVVWUzYwRkt4TzJDaldTRFpJbVFxOS9DNDJ4eTlLNTlFZCtaWHlZaVE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJxRGdvME5Gd0NqV0tOWUY5TlRIdHVFVEZlTGZibVR4MUpIMWQ0OEFwQlpMVUpMVjFKSjM1SmtjT1A0VzBaZVY4K2lTbm41WW1rdnpnUFNtOGdXYkdEUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjdkT21NMVdQbVFuNDRmamJkRzRxSktCSjd6YmN3d1IxdE1xWVczM3hOd2pCTVh2ZmM5YmxkaWdlTlEzNDBnNnoxeklkL3dCbENKTXRaV0YxTTlYMGl3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3NTQ3ODM2ODM6OTNAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIvCThZPwnZmS8J2elvCdnpjwnZmV8JOFk1wiLFwibGlkXCI6XCI2MTM0OTY0ODQxNjgzMTo5M0BsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NTQ3ODM2ODM6OTNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWjc3bEZVdXRCU3NUdGdvMWtnMlNKa0t2Znd1TnNjdlN1ZlJIZm1WOG1Ja1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDkwMjE0Nzl9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
 
