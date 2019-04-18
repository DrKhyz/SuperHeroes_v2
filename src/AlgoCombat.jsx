import React from 'react';

const AlgoCombat = oldStats => {
	// let intelligence1 = oldStats.hero1.powerstats.intelligence
	// let strength1 = oldStats.hero1.powerstats.strength
	// let speed1 = oldStats.hero1.powerstats.speed
	// let durability1 = oldStats.hero1.powerstats.durability
	// let power1 = oldStats.hero1.powerstats.power
	// let combat1 = oldStats.hero1.powerstats.combat
	// let life1 = oldStats.hero1.powerstats.life

	// let intelligence2 = oldStats.hero2.powerstats.intelligence
	// let strength2 = oldStats.hero2.powerstats.strength
	// let speed2 = oldStats.hero2.powerstats.speed
	// let durability2 = oldStats.hero2.powerstats.durability
	// let power2 = oldStats.hero2.powerstats.power
	// let combat2 = oldStats.hero2.powerstats.combat
	// let life2 = oldStats.hero2.powerstats.life

	console.log('combat');

	// ----- ALGO COMBAT



	const min = 1;
	const max = 1.8;
	let randomNumber1;
	let randomNumber2;
	// let result = ((Math.random() * (max - min)) + min).toFixed(2);

	// console.log(result);

	//GENERER LES ATTAQUES DANS LA BOUCLES!!!

	for (let i = 0; i < 1; i++) {
		randomNumber1 = ((Math.random() * (max - min)) + min).toFixed(2);
		randomNumber2 = ((Math.random() * (max - min)) + min).toFixed(2);
	}


	// let attack2 = Math.floor(((oldStats.hero2.powerstats.strength + (oldStats.hero2.powerstats.power / 2)) * (oldStats.hero2.powerstats.combat / 50)) - (oldStats.hero1.powerstats.durability / 10));
	// let attack1 = Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10));

	// if (attack2 <= 50) {
	// 	attack2 = 50;
	// }
	// if (Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) <= 50) {
	// 	Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) = 50;
	// }

	// if (attack2 >= 200) {
	// 	attack2 = 200;
	// }
	// if (Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) >= 200) {
	// 	Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) = 200;
	// }

	oldStats.hero1.powerstats.life -= Math.floor(Math.floor(((oldStats.hero2.powerstats.strength + (oldStats.hero2.powerstats.power / 2)) * (oldStats.hero2.powerstats.combat / 50)) - (oldStats.hero1.powerstats.durability / 10)) * randomNumber2);
	oldStats.hero2.powerstats.life -= Math.floor(Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) * randomNumber1);

	if (oldStats.hero1.powerstats.life < 0) {
		oldStats.hero1.powerstats.life = 0;
	}

	if (oldStats.hero2.powerstats.life < 0) {
		oldStats.hero2.powerstats.life = 0;
	}

	// ---------- TESTS

	console.log('life hero1 ' + oldStats.hero1.powerstats.life);
	console.log('Attaque hero2 ' + Math.floor(Math.floor(((oldStats.hero2.powerstats.strength + (oldStats.hero2.powerstats.power / 2)) * (oldStats.hero2.powerstats.combat / 50)) - (oldStats.hero1.powerstats.durability / 10)) * randomNumber2));
	console.log('life hero2 ' + oldStats.hero2.powerstats.life);
	console.log('Attaque hero1 ' + Math.floor(Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) * randomNumber1));

	// ---------- TESTS

	return {
		hero1: {
			id: oldStats.hero1.id,
			name: oldStats.hero1.name,
			powerstats: {
				intelligence: oldStats.hero1.powerstats.intelligence,
				strength: oldStats.hero1.powerstats.strength,
				speed: oldStats.hero1.powerstats.speed,
				durability: oldStats.hero1.powerstats.durability,
				power: oldStats.hero1.powerstats.power,
				combat: oldStats.hero1.powerstats.combat,
				life: oldStats.hero1.powerstats.life
			},
			biography: {
				...oldStats.hero1.biography
			},
			appearance: {
				gender: oldStats.hero1.appearance.gender,
				race: oldStats.hero1.appearance.race,
				height: oldStats.hero1.appearance.height,
				weight: oldStats.hero1.appearance.weight
			},
			image: oldStats.hero1.image
		},
		hero2: {
			id: oldStats.hero2.id,
			name: oldStats.hero2.name,
			powerstats: {
				intelligence: oldStats.hero2.powerstats.intelligence,
				strength: oldStats.hero2.powerstats.strength,
				speed: oldStats.hero2.powerstats.speed,
				durability: oldStats.hero2.powerstats.durability,
				power: oldStats.hero2.powerstats.power,
				combat: oldStats.hero2.powerstats.combat,
				life: oldStats.hero2.powerstats.life
			},
			biography: {
				...oldStats.hero2.biography
			},
			appearance: {
				gender: oldStats.hero2.appearance.gender,
				race: oldStats.hero2.appearance.race,
				height: oldStats.hero2.appearance.height,
				weight: oldStats.hero2.appearance.weight
			},
			image: oldStats.hero2.image
		}
	};
};

export default AlgoCombat;
