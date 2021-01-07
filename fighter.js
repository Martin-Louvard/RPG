class Fighter extends Character {
  constructor(
    name,
    hp = 12,
    dmg = 4,
    mana = 40,
    special = { name: "Dark Vision", dmg: 5, manaCost: 20, used: "no" },
    status = "playing"
  ) {
    super(name, hp, dmg, mana, special, status);
  }

  Special(victim) {
    if (this.mana >= this.special.manaCost) {
      if (
        victim instanceof Fighter &&
        victim.special.used == `Tour ${10 - game1.turnLeft}`
      ) {
        victim.takeDamage(this.special.dmg - 2);
      } else if (
        victim instanceof Assassin &&
        victim.special.used == `Tour ${10 - game1.turnLeft - 1}`
      ) {
        victim.takeDamage(0);
      } else {
        victim.takeDamage(this.special.dmg);
      }
      this.mana = victim.hp <= 0 ? this.mana + 20 : this.mana;

      this.mana = this.mana - this.special.manaCost;
      this.special.used = `Tour ${10 - game1.turnLeft}`;
      console.log(
        `${this.name} dealt ${this.special.dmg} damages to ${victim.name}. ${victim.name} has ${victim.hp} hp left. ${this.name} has ${this.mana} mana left`
      );
    } else {
      console.log("You don't have enough mana. You just wasted a turn...");
    }
  }
}
