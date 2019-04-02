/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gAttr) {
  this.createdAt = gAttr.createdAt;
  this.dimensions = gAttr.dimensions;
  this.name = gAttr.name;
  
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttr) {
  GameObject.call(this, charAttr);
  this.healthPoints = charAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humAttr) {
  GameObject.call(this, humAttr);
  CharacterStats.call(this, humAttr);
  this.team = humAttr.team;
  this.weapons = humAttr.weapons;
  this.language = humAttr.language;
}
Humanoid.prototype = Object.create(GameObject.prototype);

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  function Villain(vAttr) {
    Humanoid.call(this, vAttr);
    this.superPower = vAttr.superPower;
  }
  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.hitToDeath = function(obj) {
    let donzy = obj.healthPoints - obj.healthPoints;
    donzy = obj.healthPoints;
    return `${Hero.name}, your time is up. ${donzy} points. Play again if you dare!!`;
  }

  Villain.prototype.youKnowWhatSlap = function(obj) {
    let points = obj.healthPoints -= 1;
    return `That's what I thought ${obj.name} you now have ${points} points left :(`
  }

  function Hero(hAttr) {
    Humanoid.call(this, hAttr);
    this.heroWeapon = hAttr.heroWeapon;
    this.superBlock = hAttr.superBlock;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.block = function(obj) {
    if (obj.hitToDeath && this.superBlock > 0) {
      ! obj.hitToDeath;
      return `No way ${obj.name}.   I still have ${obj.healthPoints} points.  Take your wrath elsewhere!`;

    } else if (obj.hitToDeath && this.superBlock <= 0) {
      return `Sorry no more SuperBlock. You're dead:(`; 
    }
  }
  
  Hero.prototype.putInPlace = function(obj) {
    return `${obj.name} you now have ${obj.healthPoints -= 1} points`;
  }

  Hero.prototype.fatality = function(obj) {
    let fin = obj.healthPoints - obj.healthPoints;
    return `${obj.name}, nice try, but not nice enough. ${fin}, you lose!  Haha!`;
  }

  const superMan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 4,
      height: 4,
    },
    healthPoints: 10,
    name: 'SupaMan',
    team: 'Frosty BullWinkles',
    weapons: [
      'BullStaff',
      'Nunchucku',
    ],
    language: 'Martian',
    heroWeapon: 'Muscle Rock',
    superBlock: 4,
  })

  const HulkHogan = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 24,
      width: 24,
      height: 48,
    },
    healthPoints: 10,
    name: 'HulkMeyster',
    team: 'WWF',
    weapons: [
      'Atomic Leg',
      'Lightning Bold',
    ],
    language: 'Hoganoid',
    superPower: 'Atomic Leg drop'
  })

  console.log(HulkHogan.hitToDeath(superMan));
  superMan.superBlock = 0;
  console.log(superMan.block(HulkHogan));
  console.log(superMan.putInPlace(HulkHogan));
  console.log(superMan.fatality(HulkHogan));