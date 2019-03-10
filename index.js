const Discord = require ('discord.js');
const bot = new Discord.Client();
const prefix = config.prefix;
const snek = require ('snekfetch');

bot.on('ready', () => console.log("online!"));

bot.on("guildMemberAdd", (member) => {
    let guild = member.guild;
    let memberTag = member.user.tag;
    if(member.guild.channels.find(channel => channel.name === "welcomechannel"));
       guild.systemChannel.send("/userinfo" + " <@" + member.id + ">" )
    }



);

bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Sacrifice");
    member.addRole(role).catch(console.error);
});


bot.on('message', (msg) => {

if (msg.content.startsWith(prefix + "userinfo")) {
    let member = msg.mentions.users.first() || msg.author;
    let userembed = new Discord.RichEmbed()
        .setColor(msg.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Here is ${member.username}'s info`)
        .addField(`Name:`, member.username, true)
        .addField(`Id:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Yes" : "No", true)
        .addField("Game:", msg.guild.member(member).presence.game ? msg.guild.member(member).presence.game.name : "Not Playing", true)
        .addField("Nickname:", msg.guild.member(member).nickname ? msg.guild.member(member).nickname : "None", true )
        .addField(`Roles:`, msg.guild.member(member).roles.map(s => s).join(" | "), true)
        .addField("Created At:", member.createdAt, true)
        .addField("JoinedAt:", msg.guild.member(member).joinedAt, true)
        msg.channel.send(userembed);
}

    });

bot.login(process.env.BOT_TOKEN);
