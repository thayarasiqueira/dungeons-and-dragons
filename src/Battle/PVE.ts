import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import Monster from '../Monster';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public monster: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  fight(): number {
    this.monster.forEach((monster) => {
      this.player.attack(monster);
      monster.attack(this.player);
    });

    if (this.player.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}