class Monk extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 2,
    mana = 200,
    special = { name: "Heal", manaCost: 25, hp: 8 },
    status = "playing"
  ) {
    super(name, hp, dmg, mana, special, status);
  }

  Special() {
    if (this.mana >= this.special.manaCost) {
      this.mana = this.mana - this.special.manaCost;
      this.hp = this.hp + this.special.hp;
      console.log(
        `${this.name} healed for ${this.special.hp} and thus has ${this.hp} hp total. ${this.name} has ${this.mana} mana left`
      );
    } else {
      console.log("You don't have enough mana. You just wasted a turn...");
    }
  }
}
