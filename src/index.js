const { Client, GatewayIntentBits, Partials } = require('discord.js');

/* Initialize client */
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
    ],
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false
    },
    partials: [Partials.Channel, Partials.Message, Partials.Reaction],
    restTimeOffset: 60,
});

const WouldYouSupport = async () => {
    const Voting = require('./util/voteLogger');
    const vote = new Voting(client);
    vote.startAPI();

    await require('./util/supportClient')(client);
    await require('./util/dbHandler');
    await require('./util/eventLoader')(client);
};

WouldYouSupport();
