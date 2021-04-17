const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    console.log("ce message ne sert à rien")
});

bot.login("t'as vraiment cru ?")

bot.on("message", message => {
    if(message.content === "!ping") {
        message.channel.send("salut fdp")
    }
});

bot.on("message", message => {
    if(message.content === "!bonjour") {
        message.reply("casse toi")
        message.react("🖕")
        message.react(bot.emojis.cache.get("832986588039872572"));
    }
});

bot.on("message", message => {
    if(message.content.startsWith("!pin")) {
        message.pin()
    }
});
