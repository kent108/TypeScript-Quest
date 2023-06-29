
// CREATION DE LA CLASSE HERO

class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon!: weapon;

  constructor(name: string, power: number, life: number) {
    (this.name = name), (this.power = power), (this.life = life);
  }

  public attack(opponent: Hero) {
    {opponent.reduceLife(this.power);}
  }

  isAlive(): boolean {
    return this.life > 0;
  }

  reduceLife(damage: number) {
    this.life -= damage;
  }

  getName(): string {
    return this.name;
  }

  getPower(): number {
    return this.power;
  }

  getLife(): number {
    return this.life;
  }

  setPower(power: number) {
    this.power = power;
  }

  setLife(life: number) {
    this.life = life;
  }

  setName(name: string) {
    this.name = name;
  }
}

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new weapon('Axe', 10);
  }
  public attack(opponent: Hero): void{    
      if (opponent instanceof HeroSword) {
        opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
      } else {
        opponent.reduceLife(this.getPower() + this.weapon.damage); }
    
    
  }
}

class HeroSword extends Hero{
  constructor(name: string, power: number, life:number) {
    super(name, power, life);
    this.weapon = new weapon('Sword', 20);
  }
  public attack(opponent: Hero): void {     
        if (opponent instanceof HeroSpear) {
          opponent.reduceLife(this.getPower()*2+this.weapon.damage);
        } else {
          opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
      
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new weapon("Spear", 30);
  }
  public attack(opponent: Hero): void {     
      if (opponent instanceof HeroAxe) {
        opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
      } else {
        opponent.reduceLife(this.getPower() + this.weapon.damage);
      }
    
  }
}

// CREATION DE LA CLASSE WEAPON

class weapon {
  weapon: string;
  damage: number; 

  constructor(weapon: string, damage: number) {
    this.weapon = weapon;
    this.damage = damage;
  }
}

function bataille(hero1: Hero, hero2: Hero): string {
  while (hero1.isAlive() && hero2.isAlive()) {
    console.log('Attaque' + hero1.getName() + "/" + hero2.getName());
    console.log(hero1);
    console.log(hero2);    
    hero1.attack(hero2);
    hero2.attack(hero1);
  }
  if (!hero1.isAlive() && !hero2.isAlive()) {
    return ("It's a draw");
  }
  else if (!hero1.isAlive()) {
      return (`${hero2.getName()} wins`);
  }
  else {
    return (`${hero1.getName()} wins`);
  }
}

// CREATION DES JOUEURS
const louis = new Hero("Louis", 20, 100);
const jeremy = new Hero("Jeremy", 20, 100);
const quentin = new HeroAxe("Quentin", 20, 100);
const jerome = new HeroSpear("Jerome", 20, 100);
const bayram = new HeroSword("Bayram", 20, 100);

// START PLAYING

console.log("FIGHT Louis vs Jerome : " +bataille(louis, jerome));
// console.log("FIGHT Louis vs Jeremy : " +bataille(louis, jeremy));
// console.log("FIGHT Quentin vs Jeremy : " +bataille(quentin, jeremy));
// console.log("FIGHT Quentin vs Bayram : " +bataille(quentin, bayram));


// louis.attack(jeremy);
// louis.attack(jeremy);
// louis.attack(jeremy);
// louis.attack(jeremy);
// jeremy.attack(jeremy);
// quentin.attack(jerome);
// jerome.attack(quentin);
// jerome.attack(quentin);


// RESULTAT

// // LOUIS
// console.log("Nom du joueur", louis.getName());
// console.log("En vie ??", louis.isAlive());
// console.log("Power", louis.getPower());
// console.log("Vie restante", louis.getLife());

// // JEREMY
// console.log("Nom du joueur", jeremy.getName());
// console.log("En vie ??", jeremy.isAlive());
// console.log("Power", jeremy.getPower());
// console.log("Vie restante", jeremy.getLife());

// // JEROME
// console.log("Nom du joueur", jerome.getName());
// console.log("En vie ??", jerome.isAlive());
// console.log("Power", jerome.getPower());
// console.log("Vie restante", jerome.getLife());

// // QUENTIN
// console.log("Nom du joueur", quentin.getName());
// console.log("En vie ??", quentin.isAlive());
// console.log("Power", quentin.getPower());
// console.log("Vie restante", quentin.getLife());







































// class Voiture {
//   marque: string;
//   couleur: string;
//   nombreDePortes: number;

//   /**
//    *
//    */
//   constructor(marque: string, couleur: string, nombreDePortes: number) {
//     (this.marque = marque),
//       (this.couleur = couleur),
//       (this.nombreDePortes = nombreDePortes);
//   }

//     demarrer() {
//         if (this.nombreDePortes === 3) {
//         return `La voiture ${this.marque} a demarer, et elle avance`;
//         }

//     }
// }

// let voitureDeQuentin = new Voiture("peurgeot", "rouge", 5)
// let voitureDeAlex = new Voiture("ferrari", "rouge",3 );

// console.log(voitureDeQuentin.demarrer());
// console.log(voitureDeAlex.demarrer());
