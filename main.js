const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-'

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'teste') {
        message.channel.send('Olá mundo')
        console.log('deu certo')
    }

} )


client.once('ready', () => {
    console.log('LaBot is Online')
})


























client.login('OTQ0MzMwMjQzMzk1Njk4NzE5.YhACEg.fqiF22U_8gSJYaIK2Q77jtGoutg')

