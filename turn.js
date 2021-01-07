class Turn {
  new() {
    game1.newTurn();
    console.log(` ➕ Tour ${10 - game1.turnLeft} ➕`);
  }

  action() {
    let waitingPlayers = alivePlayers.filter((p) => p.status == "playing");
    let currentPlayer =
      waitingPlayers[Math.floor(Math.random() * waitingPlayers.length)];
    console.log(`Au tour de ${currentPlayer.name} de jouer.  ✔️✔️✔️`);

    let action = prompt(
      "Que voulez vous faire ? A pour attaquer ou S pour l'attaque Speciale"
    ).toUpperCase();
    let targetSelection = prompt("Qui voulez vous cibler ?");
    let target = players.filter((p) => p.name == targetSelection)[0];

    if (action == "A" && target != undefined) {
      currentPlayer.dealDamage(target);
      currentPlayer.status = "played turn";
    } else if (action == "S" && target != undefined) {
      currentPlayer.status = "played turn";
      currentPlayer.Special(target);
    } else {
      console.log("Erreur de sélection ! Ca ne pardonne pas dans l'arène...");
      currentPlayer.status = "played turn";
    }
  }
}
