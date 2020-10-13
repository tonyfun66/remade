const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')


module.exports = class citizenshipblacklist extends Command {
    constructor(client) {
        super(client, {
            
            name:"cblacklist",
            group: 'moderation',
            aliasa: ['citizenshipblacklist'],
            memberName: 'cblacklist',
            guildOnly: true,
            description: 'Result of an appeal.',
            args: [
                {
                    type:"string",
                    prompt:"Who's citizenship blacklist is this?",
                    key:"user",
                },
                {
                    type:"string",
                    prompt:"What's your username?",
                    key:"agent",
                }
            ]
        })
    }
    hasPermission (msg) {
        return msg.member.roles.find(role => role.name === 'ICF Director')
      }

    run(msg, { user, agent }) {
        
            //Rest of your code

        var channelog = msg.guild.channels.find(c => c.name === 'icf-logs')
        const AppealLog = new RichEmbed()
        .setTitle('Citizenship Blacklist')
        .setDescription(user + ' has been Blacklisted from obtaining Citizenship by ' + agent)
        .setTimestamp()
        channelog.send(AppealLog)

        msg.say('Success!')
    }
}