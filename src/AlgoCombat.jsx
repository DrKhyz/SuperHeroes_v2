import React from 'react';

let counter;

const AlgoCombat = oldStats => {

	// if (Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) <= 50) {
	// 	Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) = 50;
	// }

	// if (Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) >= 200) {
	// 	Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) = 200;
	// }

	// ----- ALGO COMBAT

	const min = 1;
	const max = 1.8;
	let randomNumber1;
	let randomNumber2;
	let attack1;
	let attack2;
	let lifeMax1 = (parseInt(oldStats.hero1.powerstats.durability) + parseInt(oldStats.hero1.powerstats.intelligence)) * (parseInt(oldStats.hero1.powerstats.speed) / 10);
	let lifeMax2 = (parseInt(oldStats.hero2.powerstats.durability) + parseInt(oldStats.hero2.powerstats.intelligence)) * (parseInt(oldStats.hero2.powerstats.speed) / 10);

	// ALTERNER LES ATTAQUE 										**DONE**
	// CHANGER LA BARRE DE COULEUR.									**DONE**

	// GENERER LES STARS EN FONCTION DES STATS DU HEROS				**TODO**
	// ARRETER L'ALGO LORSQUE L'UN DES HEROS N'A PLUS DE VIE.		**TODO**
	// GENERER DES STATS AU HASARD LORSQUE L'API N'EN FOURNIS PAS.	**TODO**

	for (let i = 0; i < 1; i++) {
		randomNumber1 = ((Math.random() * (max - min)) + min).toFixed(2);
		randomNumber2 = ((Math.random() * (max - min)) + min).toFixed(2);
		attack1 = Math.floor(Math.floor(((oldStats.hero1.powerstats.strength + (oldStats.hero1.powerstats.power / 2)) * (oldStats.hero1.powerstats.combat / 50)) - (oldStats.hero2.powerstats.durability / 10)) * randomNumber1)
		attack2 = Math.floor(Math.floor(((oldStats.hero2.powerstats.strength + (oldStats.hero2.powerstats.power / 2)) * (oldStats.hero2.powerstats.combat / 50)) - (oldStats.hero1.powerstats.durability / 10)) * randomNumber2)
	}

	// GERE LA PLAGE DE DEGAT MINI ET MAXI DES HEROS.

	if (attack2 <= 50) {
		attack2 = Math.floor(50 * randomNumber2);
	}
	if (attack2 >= 200) {
		attack2 = Math.floor(200 * randomNumber2);
	}
	if (attack1 <= 50) {
		attack1 = Math.floor(50 * randomNumber1);
	}
	if (attack1 >= 200) {
		attack1 = Math.floor(200 * randomNumber1);
	}

	// ALTERNE LES ATTAQUES DES HEROS.

	const attaqueTourParTout = (count) => {
		if (count === 0) {
			return oldStats.hero2.powerstats.life -= attack1;
		}
		if (count === 1) {
			return oldStats.hero1.powerstats.life -= attack2;
		}
	}

	if (counter === undefined) {
		counter = Math.floor(Math.random() * Math.floor(2))
	}


	attaqueTourParTout(counter)

	if (counter === 0) {
		counter = 1;
	} else {
		counter = 0;
	}

	// CHANGE LA COULEUR DE LA BARRE DE VIE

	if (oldStats.hero1.powerstats.life < (lifeMax1 / 1.5)) {
		oldStats.hero1.powerstats.barColor = 'warning';
	}

	if (oldStats.hero1.powerstats.life < (lifeMax1 / 4)) {
		oldStats.hero1.powerstats.barColor = 'danger';
	}

	if (oldStats.hero2.powerstats.life < (lifeMax2 / 1.5)) {
		oldStats.hero2.powerstats.barColor = 'warning';
	}

	if (oldStats.hero2.powerstats.life < (lifeMax2 / 4)) {
		oldStats.hero2.powerstats.barColor = 'danger';
	}

	// MET LA VIE DU HEROS A 0 LORSQUE LES DEGATS SONT SUPERIEURS A LA VIE RESTANTE.


	if (oldStats.hero1.powerstats.life < 0) {
		oldStats.hero1.powerstats.life = 0;
	}

	if (oldStats.hero2.powerstats.life < 0) {
		oldStats.hero2.powerstats.life = 0;
	}


	// ---------- TESTS

	console.log('life hero1 ' + oldStats.hero1.powerstats.life);
	console.log('Attaque hero2 ' + attack2);
	console.log('life hero2 ' + oldStats.hero2.powerstats.life);
	console.log('Attaque hero1 ' + attack1);

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
				life: oldStats.hero1.powerstats.life,
				barColor: oldStats.hero1.powerstats.barColor
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
				life: oldStats.hero2.powerstats.life,
				barColor: oldStats.hero2.powerstats.barColor
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
