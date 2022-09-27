import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(public player1: Fighter, public player2: Fighter) {
    super(player1);
  }
    
  fight(): number {
    this.player1.attack(this.player2);
    this.player2.attack(this.player1);
    
    if (this.player1.lifePoints === -1) {
      return -1;
    }
    
    return 1;
  } 
}