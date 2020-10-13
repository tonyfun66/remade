const { Client } = require('discord.js-commando')
const path = require('path')


const client = new Client({
    commandPrefix: ';',
    owner: ['329719053168148481', '669518615199875082'], // can be an array of ids like: owner: ["id", "id"]
    invite: 'https://discord.gg/BwZjVyZ',
    unknownCommandResponse: false,
})




client.registry
.registerDefaultTypes()
.registerGroups([
    ['misc', 'Misc Commands'],
    ['moderation', 'Moderator Commands'],
    ['icf', 'ICF Commands'],
    ['es', 'ES Commands']
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}(${client.user.id})`)
    client.user.setActivity('With Cleo')
})

client.on('error', console.error)


client.login('process.env.token')
