import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(public player1: Fighter, public player2: Fighter) {
    super(player1);
  }
    
  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player2.attack(this.player);
      this.player.attack(this.player2);
    }
    
    if (this.player1.lifePoints === -1) {
      return -1;
    }
    
    return 1;
  } 
}