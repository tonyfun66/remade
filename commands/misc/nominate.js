const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')


module.exports = class appealCommand extends Command {
    constructor(client) {
        super(client, {
            
            name:"nominate",
            group: 'misc',
            memberName: 'nominate',
            description: 'Nominate yourself for a specfic election..',
            guildOnly: true,
            args: [
                {
                    key: 'option',
                    prompt: 'What elections would you like to join?',
                    type: 'string',
                    oneOf: ['sheriff', 'governor'],
                },
            ],
        })
    }
    run(msg, { user, option }) {
            //Rest of your code
            msg.say('Successfully Joined The ' + option + ' elections.')
            const governor = msg.guild.roles.find('GovernorElections')
            const sheriff = msg.guild.roles.find('Sheriff Elections')
            msg.author.addRole(option)

    }
}