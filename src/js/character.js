export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('...');
    }

    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!types.includes(type)) {
      throw new Error('...');
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
