class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    dmg = 3,
    mana = 160,
    special = { name: "Healing Lighting", dmg: 4, manaCost: 40, hp: 5 },
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
      this.hp = this.hp + this.special.hp;
      console.log(
        `${this.name} dealt ${this.special.dmg} damages to ${victim.name}. ${victim.name} has ${victim.hp} hp left. ${this.name} healed for ${this.special.hp} and thus has ${this.hp} hp total. ${this.name} has ${this.mana} mana left`
      );
    } else {
      console.log("You don't have enough mana. You just wasted a turn...");
    }
  }
}
