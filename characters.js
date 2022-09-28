const characters = [
  {
    name: "Mage",
    life: 350,
    power: 100,
  },
  {
    name: "Warrior",
    life: 350,
    power: 150,
  },
  {
    name: "Archer",
    life: 350,
    power: 125,
  },
  {
    name: "Guardian",
    life: 350,
    power: 75,
  },
  {
    name: "Lancer",
    life: 350,
    power: 175,
  },
];

const attack = (character, enemy) => {
  const diceAttack1 = Math.floor(Math.random() * 6 + 1);
  const diceAttack2 = Math.floor(Math.random() * 6 + 1);
  const diceTotal = diceAttack1 + diceAttack2;
  console.log(
    character.name + " attacks " + enemy.name + " and rolled a " + diceTotal
  );
  if (diceTotal <= 3) {
    console.log("Attack failed");
  } else if (diceTotal <= 6) {
    enemy.life -= character.power * 0.5;
    console.log(
      "The attack has an effectiveness of 50% dealing " +
        character.power * 0.5 +
        " damage and enemy's life is: " +
        enemy.life
    );
  } else if (diceTotal <= 9) {
    enemy.life -= character.power * 0.8;
    console.log(
      "The attack has an effectiveness of 80% dealing " +
        character.power * 0.8 +
        " damage and enemy's life is: " +
        enemy.life
    );
  } else if (diceTotal <= 11) {
    enemy.life -= character.power;
    console.log(
      "The attack has an effectiveness of 100% dealing " +
        character.power +
        " damage and enemy's life is: " +
        enemy.life
    );
  } else {
    enemy.life -= character.power * 1.5;
    console.log(
      "The attack has an effectiveness of 150% dealing " +
        character.power * 1.5 +
        " damage and enemy's life is: " +
        enemy.life
    );
  }
};

const heal = (character) => {
  const diceHeal = Math.floor(Math.random() * 6 + 1);
  console.log(character.name + " heals and rolled a " + diceHeal);
  if (diceHeal == 1) {
    console.log("Healing is not effective");
  } else if (diceHeal <= 3) {
    character.life += 10;
    console.log("Healed 10pts and the life is : " + character.life);
  } else {
    character.life += 30;
    console.log("Healed 30pts and the life is : " + character.life);
  }
};

const defense = (character, enemy) => {
  const diceDef = Math.floor(Math.random() * 6 + 1);
  console.log(character.name + " defends and rolled a " + diceDef);
  if (diceDef == 1) {
    console.log("Defense is not effective");
  } else if (diceDef <= 3) {
    attack * 0.95;
    console.log("Defends 5% and the life is : " + character.life);
  } else {
    attack * 0.9;
    console.log("Defends 10% and the life is : " + character.life);
  }
};

const skill = (character, enemy, skill) => {
  if (skill == 1) {
    heal(character);
  } else {
    defense(character, enemy);
  }
};

const game = (characters) => {
  let character1 = characters[Math.floor(Math.random() * 5)];
  console.log(character1);
  let character2 = characters[Math.floor(Math.random() * 5)];
  console.log(character2);
  console.log(
    "Welcome to the fight:\n Character 1 is: " +
      character1.name +
      ". \n Character 2 is: " +
      character2.name +
      "."
  );

  const skillChar1 = Math.floor(Math.random() * 2 + 1);
  if(skillChar1 == 1) {
    console.log(character1.name + " has healing skills.");
  } else {
    console.log(character1.name + " has defensive skills.")
  }

  const skillChar2 = Math.floor(Math.random() * 2 + 1);
  if(skillChar2 == 1) {
    console.log(character2.name + " has healing skills.");
  } else {
    console.log(character2.name + " has defensive skills.")
  }

  let diceSkill1 = Math.floor(Math.random() *2 + 1)
  if (diceSkill1 == 2){
      skill(character1, character2, skillChar1);
  }
  else {
      attack(character1, character2);
  }

  while(character1.life > 0 && character2.life > 0) {
    let diceSkill2 = Math.floor(Math.random() *2 + 1)
    if (diceSkill2 == 2){
        skill(character2, character1, skillChar1);
    }
    else {
        attack(character2, character1);
    }

    if(character1.life > 0) {
        let diceSkill1 = Math.floor(Math.random() *2 + 1)
        if (diceSkill1 == 2){
            skill(character1, character2, skillChar1);
        }
        else {
            attack(character1, character2);
        }
    } 
    
    if (character1.life <= 0) {
        console.log(character2.name + " WINS.");
    } else if (character2.life <= 0) {
        console.log(character1.name + "WINS");
  }
  }
};

game(characters);
