import React from 'react';

const AlgoCombat = oldStats => {
	console.log('combat');

	// ----- ALGO COMBAT

	oldStats.hero1.powerstats.life -= oldStats.hero2.powerstats.strength;
	oldStats.hero2.powerstats.life -= oldStats.hero1.powerstats.strength;

	// ---------- TESTS

	console.log(oldStats.hero1.powerstats.life);
	console.log(oldStats.hero2.powerstats.strength);
	console.log(oldStats.hero2.powerstats.life);
	console.log(oldStats.hero1.powerstats.strength);

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
