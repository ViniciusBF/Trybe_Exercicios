const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const Damage = (min, max) => {
  result = Math.random() * (max - min) + min;
  return Math.round(result);
};
const Dragon = () => Damage(15, dragon.strength);

const Warrior = () => {
  const min = warrior.strength;
  const max = min * warrior.weaponDmg;
  return Damage(min, max);
};
const Mage = () => {
  const min = mage.intelligence;
  const max = min * 2;
  let mana = mage.mana;
  let damage = 0;
  if (mana < 15) {
    mana = 'Não possui mana suficiente';
  } else {
    mana = mana - 15;
    damage = Damage(min, max, mage);
  }
  return { mana: mana, damage: damage }
};

const gameActions = {
  w: (func) => {
    const da = func();
    dragon.healthPoints -= da;
    warrior.damage = da;
  },
  m: (func) => {
    const da = func();
    dragon.healthPoints -= da.damage;
    mage.damage = da.damage;
    mage.mana = da.mana;
  },
  d: (func) => {
    const da = func();
    dragon.damage = da;
    warrior.healthPoints -= da;
    mage.healthPoints -= da;
  },
  turn: () => battleMembers,
};
console.log(gameActions.turn());
gameActions.w(Warrior);
gameActions.m(Mage);
gameActions.d(Dragon);
console.log(gameActions.turn());