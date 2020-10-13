const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')


module.exports = class citizenshipCommand extends Command {
    constructor(client) {
        super(client, {
            
            name:"cappeal",
            group: 'moderation',
            memberName: 'cappeal',
            guildOnly: true,
            description: 'Result of an appeal.',
            args: [
                {
                    type:"string",
                    prompt:"Who's citizenship appeal is this?",
                    key:"user",
                },
                {
                    type:"string",
                    prompt:"What's your username?",
                    key:"agent",
                },
                {
                    type:"string",
                    prompt:"What is the result of this appeal (Accepted/Declined/Inventory Private)",
                    key:"result"
                }
            ]
        })
    }
    hasPermission (msg) {
        return msg.member.roles.find(role => role.name === 'ICF')
      }

    run(msg, { user, result, agent }) {

        
        
            //Rest of your code

        var channelog = msg.guild.channels.find(c => c.name === 'citizenship-logs')
        const AppealLog = new RichEmbed()
        .setTitle(user + "'s " + ' Citizenship Appeal')
        .setAuthor(agent)
        .setDescription(result)
        .setTimestamp()
        channelog.send(AppealLog)

        msg.say('Success!')
    }
}