class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 4,
    mana = 0,
    special = { name: "Rage", dmg: 1, manaCost: 0, hp: -1 },
    status = "playing"
  ) {
    super(name, hp, dmg, mana, special, status);
  }

  Special() {
    this.hp = this.hp + this.special.hp;
    this.dmg = this.dmg + this.special.dmg;
    console.log(
      `${this.name} dealt ${this.special.dmg} damages to himself to increase its damages. ${this.name} have ${this.hp} hp left.`
    );
    let reuse = confirm("Voulez vous réutiliser votre attaque spéciale?");
    if (reuse) {
      this.Special();
    } else {
      this.status = this.hp <= 0 ? "loser" : `${this.status}`;
      this.hp <= 0
        ? console.log(`${this.name} is dead 💀💀💀💀💀💀`)
        : console.log(`Next turn is gonna huuuuurt`);
    }
  }
}
