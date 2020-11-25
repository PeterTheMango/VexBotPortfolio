const Command = require('../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require(`node-fetch`);
const colors = require(`../colors.json`);


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'bird',
			description: 'Displays a random bird image.',
			category: 'Image'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		const { link } = await fetch(`https://some-random-api.ml/img/birb`)
			.then(res => res.json());
		const embed = new MessageEmbed()
			.setAuthor(`Random Bird Image`)
			.setColor(colors.Primary)
			.setImage(link);

		message.channel.send(embed);
	}

};

