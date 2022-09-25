import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static counter = 0;
  private _type: EnergyType;
    
  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    this._type = 'stamina';
    Warrior.counter += 1;
  }
  
  static createdRacesInstances(): number {
    return Warrior.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}