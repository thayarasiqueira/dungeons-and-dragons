import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static counter = 0;
  private _type: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior.counter += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}