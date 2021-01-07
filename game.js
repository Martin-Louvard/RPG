class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft = this.turnLeft - 1;
  }

  watchStats() {
    console.log(alivePlayers);
  }

  addPlayer(classe) {
    if (classe == Fighter) {
      let name = prompt("Quel nom voulez vous donner à votre personnage ?");
      let newPlayer = new Fighter(name);
      players.push(newPlayer);
    } else if (classe == Paladin) {
      let name = prompt("Quel nom voulez vous donner à votre personnage ?");
      let newPlayer = new Paladin(name);
      players.push(newPlayer);
    } else if (classe == Monk) {
      let name = prompt("Quel nom voulez vous donner à votre personnage ?");
      let newPlayer = new Monk(name);
      players.push(newPlayer);
    } else if (classe == Berzerker) {
      let name = prompt("Quel nom voulez vous donner à votre personnage ?");
      let newPlayer = new Berzerker(name);
      players.push(newPlayer);
    } else if (classe == Assassin) {
      let name = prompt("Quel nom voulez vous donner à votre personnage ?");
      let newPlayer = new Assassin(name);
      players.push(newPlayer);
    } else {
      console.log("Problème lors de la création du personnage");
    }
  }

  start() {
    let i = 0;
    //////////////////////// Boucle des tours et des actions
    for (i = 0; i < 10; i++) {
      let turn = new Turn();
      turn.new();
      alivePlayers = players.filter((player) => player.status !== "loser");
      alivePlayers.forEach(function (player) {
        player.status = "playing";
      });
      let waitingPlayers = alivePlayers.filter((p) => p.status == "playing");
      while ( 0 < waitingPlayers.length) {
        turn.action();
        waitingPlayers = alivePlayers.filter((p) => p.status == "playing");
        alivePlayers = players.filter((p) => p.status !== "loser");
      }
      console.log(alivePlayers);
      console.log("fin du tour");
      if (alivePlayers.length === 1 || game1.turnLeft == 0) {
        break;
      }
    }

    //////////////////////// Annonce du gagnant
    let winners = alivePlayers.map((p) => p.hp);
    if (winners.length > 1) {
      let maxHp = winners.reduce(
        (maxhp, hp) => (hp > maxhp ? hp : maxhp),
        winners[0]
      );
      winner = alivePlayers.filter((w) => w.hp == maxHp);
      console.log(`Winner ${winner[0].name} 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆`);
    } else {
      console.log(
        `Winner ${alivePlayers[0].name} 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆`
      );
    }
  }
}

//////////////////////// Initialisation de la partie et des personnages de base
let game1 = new Game();
let Grace = new Fighter("Grace");
let Ulder = new Paladin("Ulder");
let Moana = new Monk("Moana");
let Draven = new Berzerker("Draven");
let Carl = new Assassin("Carl");
let players = [Grace, Ulder, Moana, Draven, Carl];
let alivePlayers = [];
