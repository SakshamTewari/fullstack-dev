/*
    Flyweight

    - structural pattern that minimses memory usage
    - share as much data as possible with similar objects
    - instead of creating new object for each instance, reuse existing ones that share same state.

*/

/*

Implementation 1:

    - In text editor, each character is an object
    - instead of creating a new object for every character, we can use flyweight pattern to share objects among characters that are same

*/

class Character {
  constructor(char) {
    this.char = char;
  }
  display(position) {
    console.log(`Character: ${this.char} at position ${position}`);
  }
}

class CharacterFactory {
  constructor() {
    this.characters = {};
  }
  getCharacter(char) {
    if (!this.characters[char]) {
      this.characters[char] = new Character(char);
    }
    return this.characters[char];
  }
}

//Usage
const factory = new CharacterFactory();
const text = 'Flyweight Pattern';
for (let i = 0; i < text.length; i++) {
  const char = factory.getCharacter(text[i]);
  char.display(i);
}

/*
Where it’s actually used

Text editors / IDEs
Reuse character glyph objects.

Game development
Trees, grass, bullets, or tiles → instead of thousands of unique objects, you reuse a small set.

Icons in UI
Reuse shared images or components.

Document rendering (PDF, HTML engines)
Same font characters, images, styles are reused.

Caching in general
Database connection pools, thread pools, etc.
*/
