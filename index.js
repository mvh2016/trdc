const Discord = require('discord.js');
const prefix = '/';
const token = process.env.token
const client = new Discord.Client();

client.once('ready', () => {
    console.log('The bot is ready.')
    client.user.setActivity('TRDC | /commands', { type: "WATCHING" })
})

client.on('message', message => {
    
    if (message.content.startsWith(`${prefix}commands`)) {
        const ThisEmbed = new Discord.RichEmbed()
            .setTitle(':wave: TRDCBot - List of Commands :wave:')
            .setDescription('Gives you a list of commands that I accept!')
            .addField('`/btcheck`', 'Puts out the basic training event check message.', false)
            .addField('`/stcheck`', 'Puts out the scenario training event check message.', false)
            .addField('`/dtcheck`', 'Puts out the discipline training event check message.', false)
            .addField('`/btstart <time starting>`', 'Announces a basic training that is starting! Make sure to provide the starting time and timezone. \ni.e. /btstart 18:00 GMT', false)
            .addField('`/ststart <time starting>`', 'Announces a scenarios training that is starting! Make sure to provide the starting time and timezone. \ni.e. /ststart 18:00 GMT', false)
            .addField('`/dtstart <time starting>`', 'Announces a discipline training that is starting! Make sure to provide the starting time and timezone. \ni.e. /dtstart 18:00 GMT', false)
            .addField('`/btend`', 'Announces the end of a basic training.', false)
            .addField('`/stend`', 'Announces the end of a scenarios training.', false)
            .addField('`/dtend`', 'Announces the end of a discipline training.', false)
            .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
        message.channel.send(ThisEmbed)
    }

    // Basic Training Check

    if (message.content.startsWith(`${prefix}btcheck`)) {
        if (message.member.roles.has('673866758137839617')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const btCheckEmbed = new Discord.RichEmbed()
                .setTitle('**:white_check_mark: Basic Training :white_check_mark:**')
                .setDescription('React below for a Basic Training to be hosted.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(btCheckEmbed)
            channelToSend.send('<@&672798621678305290>')
            message.channel.send(':white_check_mark: Event check message successfully posted, '+message.author)
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        }
    }

    // Scenarios Training Check

    if (message.content.startsWith(`${prefix}stcheck`)) {
        if (message.member.roles.has('673866758137839617')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const stCheckEmbed = new Discord.RichEmbed()
                .setTitle('__**:white_check_mark: Scenarios Training :white_check_mark:**__')
                .setDescription('React below with a :white_check_mark: for a Scenarios Training to be hosted.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(stCheckEmbed)
            channelToSend.send('<@&672798621678305290>')
            message.channel.send(':white_check_mark: Event check message successfully posted, '+message.author)
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        }
    }

    // Discipline Training Check

    if (message.content.startsWith(`${prefix}dtcheck`)) {
        if (message.member.roles.has('673866758137839617')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const dtCheckEmbed = new Discord.RichEmbed()
                .setTitle('__**:white_check_mark: Discipline Training :white_check_mark:**__')
                .setDescription('React below with a :white_check_mark: for a Discipline Training to be hosted.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(dtCheckEmbed)
            channelToSend.send('<@&672798621678305290>')
            message.channel.send(':white_check_mark: Event check message successfully posted, '+message.author)
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        } 
    }  

    // Cancelled

    if (message.content.startsWith(`${prefix}cancel`)) {
        if (message.member.roles.has('673866758137839617')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const cancelEmbed = new Discord.RichEmbed()
                .setTitle('__**:x: Training Cancelled :x:**__')
                .setDescription('The training was cancelled by '+message.author)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(cancelEmbed)
            message.channel.send(':white_check_mark: Cancelled message successfully posted, '+message.author)
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        } 
    }  
    
    // Basic Training Start

    try {
        if (message.content.startsWith(`${prefix}btstart`)) {
            if (message.member.roles.has('673866758137839617')) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const btStartEmbed = new Discord.RichEmbed()
                    .setTitle('__**:alarm_clock: Basic Training Scheduled :alarm_clock:**__')
                    .setDescription('A TRDC basic training is being hosted.')
                    .addField('Host', message.author, false)
                    .addField('Starting Time', finalArg)
                    .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
                var channelToSend = client.channels.get('673861759509069834')
                channelToSend.send(btStartEmbed)
                message.channel.send(':white_check_mark: Event start message successfully posted, '+message.author)
                channelToSend.send('<@&672798621678305290>')
            }
            else {
                message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
            }
        }
    }

    catch {
        message.channel.send(':warning: An error was found. Perhaps you forgot to include the time argument? '+message.author)
    }

    // Scenario Training Start

    try {
        if (message.content.startsWith(`${prefix}ststart`)) {
            if (message.member.roles.has('673866758137839617')) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const stStartEmbed = new Discord.RichEmbed()
                    .setTitle('__**:alarm_clock: Scenario Training Scheduled :alarm_clock:**__')
                    .setDescription('A TRDC Scenario training is being hosted.')
                    .addField('Host', message.author, false)
                    .addField('Starting Time', finalArg)
                    .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
                var channelToSend = client.channels.get('673861759509069834')
                channelToSend.send(stStartEmbed)
                message.channel.send(':white_check_mark: Event start message successfully posted, '+message.author)
                channelToSend.send('<@&672798621678305290>')
            }
            else {
                message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
            }
        }
    }
    
    catch {
        message.channel.send(':warning: An error was found. Perhaps you forgot to include the time argument? '+message.author)
    }

// Discipline Training Start

    try {
        if (message.content.startsWith(`${prefix}dtstart`)) {
            if (message.member.roles.has('673866758137839617')) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const dtStartEmbed = new Discord.RichEmbed()
                    .setTitle('__**:alarm_clock: Discipline Training Scheduled :alarm_clock:**__')
                    .setDescription('A TRDC Discipline training is being hosted.')
                    .addField('Host', message.author, false)
                    .addField('Starting Time', finalArg)
                    .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
                var channelToSend = client.channels.get('673861759509069834')
                channelToSend.send(dtStartEmbed)
                message.channel.send(':white_check_mark: Event start message successfully posted, '+message.author)
                channelToSend.send('<@&672798621678305290>')
            }
            else {
                message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
            }
        }
    }
    
    catch {
        message.channel.send(':warning: An error was found. Perhaps you forgot to include the time argument? '+message.author)
    }

// Basic Training End

   
    if (message.content.startsWith(`${prefix}btend`)) {
        if (message.member.roles.has('673866758137839617')) {
            const btEndEmbed = new Discord.RichEmbed()
                .setTitle('__**Basic Training Ended**__')
                .setDescription('The basic training has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(btEndEmbed)
            message.channel.send(':white_check_mark: Event end message successfully posted, '+message.author)
            channelToSend.send('<@&672798621678305290>')
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        }
    }

// Scenario Training End

    if (message.content.startsWith(`${prefix}stend`)) {
        if (message.member.roles.has('673866758137839617')) {
            const stEndEmbed = new Discord.RichEmbed()
                .setTitle('__**Scenario Training Ended**__')
                .setDescription('The scenario training has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(stEndEmbed)
            message.channel.send(':white_check_mark: Event end message successfully posted, '+message.author)
            channelToSend.send('<@&672798621678305290>')
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        }
    }

// Discipline Training End

    if (message.content.startsWith(`${prefix}dtend`)) {
        if (message.member.roles.has('673866758137839617')) {
            const dtEndEmbed = new Discord.RichEmbed()
                .setTitle('__**Discipline Training Ended**__')
                .setDescription('The discipline training has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var channelToSend = client.channels.get('673861759509069834')
            channelToSend.send(dtEndEmbed)
            message.channel.send(':white_check_mark: Event end message successfully posted, '+message.author)
            channelToSend.send('<@&672798621678305290>')
        }
        else {
            message.channel.send(':warning: Insufficient permissions - role required: `Event Host` '+message.author)
        }
    }

})

client.login(token)
