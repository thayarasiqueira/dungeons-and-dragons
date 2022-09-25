import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character {
  private _name: string;
  private _dexterity: number;
  private _race: Race; 
  private _special: number;
  private _cost: number;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength:number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._special = getRandomInt(1, 10);
    this._cost = getRandomInt(1, 10);
    const race = new Elf(this._name, this._dexterity);
    this._race = race;
    const archetype = new Mage(this._name);
    this._archetype = archetype;
    this._maxLifePoints = ((this._race.maxLifePoints) / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp():void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter): void;
}