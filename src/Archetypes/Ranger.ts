import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static counter = 0;
  private _type: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger.counter += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}