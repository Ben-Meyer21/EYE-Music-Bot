module.exports = {
  Admins: ["745797209722847362", "UserID"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || "e!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://dsc.gg/eye-esports", //Support Server Link
  Token: process.env.Token || "ODY3Mjc1MjIyNTUzOTg1MDQ0.YPeu_g.seB29vOQV50oqQglFUV-OXnSODo", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "867275222553985044", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "m_f1ltlrr25fKNlRir8SurxJ1D-llDHC", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is bts", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/807257475278569473/842642320666918912/1620971978415.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

   //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main", //Lavalink id 
    host: "india.lavalink.org", //Lavalink host server
    port: 2333, //Lavalink port
    pass: "youshallnotpass", //Lavalink password
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "b28e3a8d5f3b4ed19d30650c6276a83e", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || " 5edb97df928e4412930cadbb39b22dd2", //Spotify Client Secret
  },
};
