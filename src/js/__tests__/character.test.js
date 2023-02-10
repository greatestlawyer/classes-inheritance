import Character from '../character';

test('test class Character with valid values of property', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test class Character with invalid value of name', () => {
  expect(() => new Character('volandemort', 'Daemon', 40, 20)).toThrow();
});

test('test class Character with invalid value of type', () => {
  expect(() => new Character('voland', 'Pacman', 40, 20)).toThrow();
});
