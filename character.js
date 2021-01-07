class Character {
  constructor(name, hp, dmg, mana, special, status) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.special = special;
    this.status = status;
    console.log(`${this.name} entre dans l'arène ! ⚜️ `);
  }

  takeDamage(taken) {
    this.hp = this.hp - taken;
    this.status = this.hp <= 0 ? "loser" : `${this.status}`;
    this.hp <= 0
      ? console.log(`${this.name} is dead 💀💀💀💀💀💀`)
      : console.log(
          `${this.name} received ${taken} damages. ⚔️ and has ${this.hp} hp left`
        );
  }

  dealDamage(victim) {
    if (
      victim instanceof Fighter &&
      victim.special.used == `Tour ${10 - game1.turnLeft}`
    ) {
      victim.takeDamage(this.dmg - 2);
    } else if (
      victim instanceof Assassin &&
      victim.special.used == `Tour ${10 - game1.turnLeft - 1}`
    ) {
      victim.takeDamage(0);
    } else {
      victim.takeDamage(this.dmg);
    }
    this.mana = victim.hp <= 0 ? this.mana + 20 : this.mana;
  }
}
