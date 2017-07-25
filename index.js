// Import the discord.js module
const Discord = require("discord.js");
// Create an instance of a Discord client
const bot = new Discord.Client();
// Bot token
const config = require("./config.json");
//bot ID
const botID = "<@338066318626521089>"

// Fortunes for 8ball command
var fortunes = [
    //Affirmative
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    //Non-Committal
    "Reply hazy try again.",
    "Ask me if i care.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    //Negative
    "You wish.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Array of tsunderes
var tsun_gif = [
    "https://68.media.tumblr.com/20f5bf9c69bc5231b92322b9dfd08afa/tumblr_o4bg1c9C3o1ul7kifo1_500.gif",
    "http://31.media.tumblr.com/0d560b1cdbe31b3ebc97b7538512153b/tumblr_mhdls2dMZP1rbwsb9o1_500.gif",
    "https://media.giphy.com/media/Qh7WgUju8KYRG/giphy.gif",
    "https://s-media-cache-ak0.pinimg.com/originals/e0/77/e6/e077e6ff22f2fdbb67ef37d0ff2e8562.gif",

]

// Array of tsundere title responses
var tsun_title = [
    "You couldn't figure out by yourself? I knew it, you're so helpless",
    "Don't think i like helping you...",
    "Such a worthless maggot",
    "Stop using me or i'll call the lolicops",
    "Help for a helpless person",
]

// Log ready in console once the bot loads
bot.on("ready", function () {
    console.log("I'm ready s-senpai! >///<");
    bot.guilds.get("338063891563151370").channels.get("338063891563151370").sendMessage("Ohayo! ^-^");
    bot.user.setGame("♥♥♥");
});

// Log all messages to console
bot.on("message", function (message) {
    console.log(message.content);
});

//Responding
bot.on("message", (message) => {

    if (message.author.equals(bot.user)) {
        return;
    }

    // Responses
    var gitgud = ["**Gits gud!**", ":(", "Punches " + message.author.toString(), "**Cries**", "REEEEEEEEEEEEEE"];
    var doyouLike = ["NO", "Me? Not even your mom loves you!", "Punches " + message.author.toString(), "**Throws up**", "ME?! WHAT? BLUSHING? NO? well... maybe..", "REEEEEEEEEEEEEE"];
    var noob = ["...", "What's a noob", "Who, Skilless?", "**Gasps** How dare you!", "I'll let you know my KD/r is 3.4", "REEEEEEEEEEEEEE"]
    var chris = ["n0000000000000000000000000000b", "Best i can do is 300pp", "My name is Chris, and farmings my expertise", "Only name more fitting would be farmer :^)", "Hi i'm Skilless Chris and my name describes me perfectly", "REEEEEEEEEEEEEE"]
    var ko = ["Who's ko?", "Ko...?", "...is a farmer", "**Gasps** How dare you!", "Skilless*", "REEEEEEEEEEEEEE"]
    var lewd = ["Can we make sweer memes together onii-chan?", "You are cordially invited to fuck my ass", "Damn! Men have different genitals than women! :thinking:", "Wah! What are we gonne do on the bed?", "My hips are moving on their own.", "Shoot your goo my dude!", "LEWD... but i approve..", "Why are you like this?", "[semen intensifies]", "I love Jesus", "This tail feels a bit unfomrotable", "Bruh", "Yes, keep being lewd!", "Stop teasin me, give it to me quick and just shove the whole thing in!... sorry i got a bit carried away.", "I'm so lonely", "Our relationship is just two degenerates swallowing other's milk", "My holes remain unbreakable, hehe", "Giving a new definition to cookies and cream ;)", "Motto fukaku!", "Motto yukkuri", "Motto hayaku", "Anata-ga hoshii", "Aka-chan hoshikunai-no!", "Erojijii", "Impregnate my ass!", "You are so cute i want to cum in your nose", "...I'm gonna stroke it", "I'm a man!", "Fuck me like the toad-girl i am and make me ribbit", "If not supplied with dick, i would rapidly starve to death.", "Anal sex is the key to victory", "Lick...", "Stop touching me and explain yourself!", "Fuck me harder daddy!"]

    //Gitgud
    if (message.content.toLowerCase() === "gitgud") {
        message.channel.send(gitgud[Math.floor(Math.random() * gitgud.length)]);
    }
    //Git gud
    if (message.content.toLowerCase() === "git gud") {
        message.channel.send(gitgud[Math.floor(Math.random() * gitgud.length)]);
    }
    //Do you like me?
    if (message.content.toLowerCase() === "do you like me?") {
        message.channel.send(doyouLike[Math.floor(Math.random() * doyouLike.length)]);
    }
    //Do you like me
    if (message.content.toLowerCase() === "do you like me") {
        message.channel.send(doyouLike[Math.floor(Math.random() * doyouLike.length)]);
    }
    //Noob
    if (message.content.toLowerCase() === "noob") {
        message.channel.send(noob[Math.floor(Math.random() * noob.length)]);
    }
    //Noob!
    if (message.content.toLowerCase() === "noob!") {
        message.channel.send(noob[Math.floor(Math.random() * noob.length)]);
    }
    //Chris
    if (message.content.toLowerCase() === "chris") {
        message.channel.send(chris[Math.floor(Math.random() * chris.length)]);
    }
    //Skilless
    if (message.content.toLowerCase() === "skilless") {
        message.channel.send(chris[Math.floor(Math.random() * chris.length)]);
    }
    //Ko
    if (message.content.toLowerCase() === "ko") {
        message.channel.send(ko[Math.floor(Math.random() * ko.length)]);
    }
    //Lewd
    if (message.content.toLowerCase() === "lewd") {
        message.channel.send(lewd[Math.floor(Math.random() * lewd.length)]);
    }
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) {
        return;
    }
    if (!message.content.startsWith(config.prefix)) {
        return;
    }

    var utcTime = new Date();
    var utcH = utcTime.getUTCHours();
    var utcM = utcTime.getUTCMinutes();
    var args = message.content.substring(config.prefix.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "help":
            //Help embed
            const embed = new Discord.RichEmbed()
                .setTitle("**Help & Fun/Voice Commands**")
                .setAuthor("Tsundere Bot", bot.users.get("338066318626521089").avatarURL)

                .setColor(0xFF004E)
                .setDescription(tsun_title[Math.floor(Math.random() * tsun_title.length)])
                .setFooter("Tsundere Bot (By: Mico & Skilless)", bot.users.get("338066318626521089").avatarURL)
                .setImage(tsun_gif[Math.floor(Math.random() * tsun_gif.length)])
                //.setThumbnail(bot.users.get("136856906139566081").avatarURL)
                
                //Takes a Date object, defaults to current date.

                .setTimestamp()
                .addField("RESPONSES", "The bot has some unique responses to some certain phrases such as 'git gud' (Multiple answers for each phrase)")
                .addField("COMMANDS", "Various fun commands, some are useful")
                .addField("Ping", "Returns 'Pong'", true)
                .addField("Info", "Info about the bot", true)
                .addField("Roll", "Rolls a number 1-100", true)
                .addField("UTC", "Returns UTC +-0", true)
                .addField("8ball", "Gives you a vaque answer to your question")
                .addField("VOICE COMMANDS", "**These are used to control the bot around in voice channels")
                .addField("Join", "Joins the current voice channel you're in, if possible", true)
                .addField("Leave", "Leaves the current voice channel you're in.", true)
                
            message.channel.send({
                embed
            });
            break;
        case "ping":
            //Ping test message (o?ping)
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            //Info message (o?info)
            message.channel.sendMessage("I was given life by Mico >///< **Blushes**");
            break;
        case "8ball":
            //8ball (o?8ball)
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("You need to ask your question b-baka!");
            break;
        case "roll":
            //Roll a number between 1-100 (o?roll)
            message.reply(("rolls a ") + (Math.floor(Math.random() * 100) + 1));
            break;
        case "utc":
            //Only shows UTC time! (o?world time)
            message.reply(utcH + ":" + utcM + "UTC です～")
            break;
            //Prevents defaulting
        case "join":
            break;
            //Prevents defaulting
        case "leave":
            break;
        default:
            //Default message if arugement doesn't match
            message.channel.sendMessage("B-Baka!");
    }
});

//Voice channel commands 
bot.on("message", (message) => {
    const channel = message.member.voiceChannel;
    //Joins voicechannel
    if (message.content.toLowerCase() === config.prefix + "join") {
        if (channel) {
            channel.join()
        }
    }
    //Leaves voicechannel
    if (message.content.toLowerCase() === config.prefix + "leave") {
        if (channel) {
            channel.leave();
        }
    }
});

bot.login(config.token);