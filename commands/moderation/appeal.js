const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')


module.exports = class appealCommand extends Command {
    constructor(client) {
        super(client, {
            
            name:"appeal",
            group: 'moderation',
            memberName: 'appeal',
            description: 'Result of an appeal.',
            guildOnly: true,
            args: [
                {
                    type:"string",
                    prompt:"Who's appeal is this?",
                    key:"user",
                },
                {
                    type:"string",
                    prompt:"What's your username?",
                    key:"moderator",
                },
                {
                    type:"string",
                    prompt:"What is the result of this appeal? (Accepted/Denied)",
                    key:"result"
                }
            ]
        })
    }
    hasPermission (msg) {
        return msg.member.roles.find(role => role.name === 'Moderator') || msg.member.roles.find(role => role.name === 'Admin')
      }

    run(msg, { user, result, moderator }) {
        
        
            //Rest of your code

        var channelog = msg.guild.channels.find(c => c.name === 'appeal-logs')
        const AppealLog = new RichEmbed()
        .setTitle(result + ' ' + user + "'s " + ' Appeal')
        .setAuthor(moderator)
        .setTimestamp()
        channelog.send(AppealLog)

        console.log(AppealLog.id)
    }
}