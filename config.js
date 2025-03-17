

module.exports = {
  TOKEN: "",
  language: "es",
  ownerID: ["1044072113247633418", ""], 
  mongodbUri : "mongodb+srv://pineda:pinegra@discordbot.yavpm.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "8b65025a4b1548fca224616c2ad226cd",
  spotifyClientSecret : "47ef18bf63d3458eb6d8b40f240e82b6",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Pineda Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/tSJuJR2V4E",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "XX",
      password: "pine123@@",
      host: "194.102.181.219",
      port:  5993,
      secure: false
    }
  ]
}
