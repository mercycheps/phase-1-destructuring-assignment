const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// An array of animal sounds
const animalSounds = ["cow", "horse", "sheep", "pig", "chicken"];

// Destructuring the array into variables
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Logging to verify
console.log(moo);   // "cow"
console.log(neigh); // "horse"
console.log(baa);   // "sheep"
console.log(oink);  // "pig"
console.log(cluck); // "chicken"

// Array of animal names
const animals = ["cow", "sheep", "pig", "chicken"];

// Destructuring to declare variables
const [bessie, dolly, babe, little] = animals;

console.log(bessie); // "cow"
console.log(dolly);  // "sheep"
console.log(babe);   // "pig"
console.log(little); // "chicken"

// Array of animals corresponding to their colors
const animalColors = ["cow", "sheep", "pig"];

// Destructuring to declare variables for colors
const [blackAndWhite, black, pink] = animalColors;

console.log(blackAndWhite); // "cow"
console.log(black);          // "sheep"
console.log(pink);           // "pig"

// Array of rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red);   // "red"
console.log(orange); // "orange"
console.log(yellow); // "yellow"
console.log(green);  // "green"
console.log(blue);   // "blue"
console.log(indigo); // "indigo"
console.log(violet); // "violet"

// Object destructuring
// Array of rainbow colors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "violet"];

// Destructuring to declare variables using initials
const [r, o, y, g, b, v] = rainbowColors;

console.log(r); // "red"
console.log(o); // "orange"
console.log(y); // "yellow"
console.log(g); // "green"
console.log(b); // "blue"
console.log(v); // "violet"


// Array of rainbow colors
const colorsOfRainbow = ["red", "orange", "yellow", "green", "blue", "violet", "indigo"];

// Destructuring to declare indg for "indigo"


// Array of rainbow colors
const rainbowOfColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring to extract "indigo" using indg
const [, , , , , indg] = rainbowOfColors;

console.log(indg); // "indigo"
// Strings


const muppetName = "Miss Piggy";
const color = "pink";
const song = "Never Before, Never Again";
const job = "Cast member of The Muppet Show";
const partner = "Kermit";

const song2 = "Moving Right Along";
const song4 = "I Hope That Something Better Comes Along";
const nestedJob = "Host of The Muppet Show";
const nestedPartner = "Miss Piggy";

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner