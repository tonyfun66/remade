const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')


module.exports = class ssuCommand extends Command {
    constructor(client) {
        super(client, {
            
            name:"ssu",
            aliases: ['serverstartup'],
            group: 'moderation',
            guildOnly: true,
            memberName: 'ssu',
            description: 'Hosts a server start up.',
        })
    }
    hasPermission (msg) {
        return msg.member.roles.find(role => role.name === 'Moderator')
      }
    run(msg, {}) {
            //Rest of your code

        var channelog = msg.guild.channels.find(c => c.name === 'ssu')
        channelog.send('A server startup is being hosted!\nJoin up!\n\n**Game Link:** https://www.roblox.com/games/5488843612/New-Haven-County-Remade?refPageId=7d3be973-59ec-4d6e-8283-571bd292c135#\n\n||@here||')
        msg.say('success')
    }
}