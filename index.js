#!/usr/bin/env node

const chalk = require('chalk');
const log = console.log;

const Password = (() => {
	// Password Example:
	// Mxis7-32dAAB-39R39-3ANtman

	const USER_SETTINGS = {
		numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		alphabets: 'abcdefghijklmnopqrstuvwxyz',
		symbols: '"!"#$%&\'()*+,./:;<=>?@[\]^_`{|}~"',
	};

	const randomizeToken = () => {
		let keys = Object.keys(USER_SETTINGS);
		let hash = '';

		while (hash.length != 18) {
			let random = Math.floor(Math.random() * keys.length);
			let randomToken = Math.floor(
				Math.random() * USER_SETTINGS[keys[random]].length
			);
			hash += USER_SETTINGS[keys[random]][randomToken];
		}

		return hash;
	};

	const addSeperator = (unformattedPassword) => {
		const password = unformattedPassword.split('');

		for (let i = 0; i < password.length; i++) {
			password.splice((i += 4), 0, '-');
		}

		return password.join('');
	};

	const generate = () => {
		const tokenString = randomizeToken();
		const password = addSeperator(tokenString);
		return password;
	};

	return {
		generate,
	};
})();

console.log(Password.generate());
