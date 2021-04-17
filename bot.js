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

bot.on("message", message => {
    if(message.content === "!help") {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "les commandes de fdp",
                fields: [
                    {
                        name: "!ping",
                        value: "une commande de merde pour ping"
                    },
                    {
                        name: "!pin",
                        value: "une commande de merde pour pin ton message de merde"
                    },
                    {
                        name: "bonjour",
                        value: "qu'est-ce ça fout là"
                    },
                    {
                        name: "!help",
                        value: "une commande de merde pour afficher ce message de merde"
                    }
                ]
            }
        });
    }
});
