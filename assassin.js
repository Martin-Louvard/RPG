class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    dmg = 6,
    mana = 20,
    special = { name: "Shadow hit", dmg: 7, manaCost: 20, used: "no" },
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
      this.hp = victim.hp > 0 ? this.hp - this.special.dmg : this.hp;
      this.special.used = `Tour ${10 - game1.turnLeft}`;
      if (this.hp > 0) {
        console.log(
          `${this.name} dealt ${this.special.dmg} damages to ${victim.name}. ${victim.name} has ${victim.hp} hp left. ${this.name} has ${this.mana} mana left and can't receive damage on next turn`
        );
      } else if (this.hp <= 0) {
        this.status = "loser";
        console.log(
          `${this.name} killed himself using his special ! Dumb fuck...`
        );
      }
    } else {
      console.log("You don't have enough mana. You just wasted a turn...");
    }
  }
}
