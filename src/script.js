// CREATION DE LA CLASSE HERO
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero(name, power, life) {
        (this.name = name), (this.power = power), (this.life = life);
    }
    Hero.prototype.attack = function (opponent) {
        {
            opponent.reduceLife(this.power);
        }
    };
    Hero.prototype.isAlive = function () {
        return this.life > 0;
    };
    Hero.prototype.reduceLife = function (damage) {
        this.life -= damage;
    };
    Hero.prototype.getName = function () {
        return this.name;
    };
    Hero.prototype.getPower = function () {
        return this.power;
    };
    Hero.prototype.getLife = function () {
        return this.life;
    };
    Hero.prototype.setPower = function (power) {
        this.power = power;
    };
    Hero.prototype.setLife = function (life) {
        this.life = life;
    };
    Hero.prototype.setName = function (name) {
        this.name = name;
    };
    return Hero;
}());
var HeroAxe = /** @class */ (function (_super) {
    __extends(HeroAxe, _super);
    function HeroAxe(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new weapon('Axe', 10);
        return _this;
    }
    HeroAxe.prototype.attack = function (opponent) {
        if (opponent instanceof HeroSword) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroAxe;
}(Hero));
var HeroSword = /** @class */ (function (_super) {
    __extends(HeroSword, _super);
    function HeroSword(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new weapon('Sword', 20);
        return _this;
    }
    HeroSword.prototype.attack = function (opponent) {
        if (opponent instanceof HeroSpear) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroSword;
}(Hero));
var HeroSpear = /** @class */ (function (_super) {
    __extends(HeroSpear, _super);
    function HeroSpear(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new weapon("Spear", 30);
        return _this;
    }
    HeroSpear.prototype.attack = function (opponent) {
        if (opponent instanceof HeroAxe) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroSpear;
}(Hero));
// CREATION DE LA CLASSE WEAPON
var weapon = /** @class */ (function () {
    function weapon(weapon, damage) {
        this.weapon = weapon;
        this.damage = damage;
    }
    return weapon;
}());
function bataille(hero1, hero2) {
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
        return ("".concat(hero2.getName(), " wins"));
    }
    else {
        return ("".concat(hero1.getName(), " wins"));
    }
}
// CREATION DES JOUEURS
var louis = new Hero("Louis", 20, 100);
var jeremy = new Hero("Jeremy", 20, 100);
var quentin = new HeroAxe("Quentin", 20, 100);
var jerome = new HeroSpear("Jerome", 20, 100);
var bayram = new HeroSword("Bayram", 20, 100);
// START PLAYING
console.log("FIGHT Louis vs Jerome : " + bataille(louis, jerome));
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
