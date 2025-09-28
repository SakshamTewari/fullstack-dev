/*
    Bridge pattern
    - structural
    - separates abstraction from implementation
*/

/*
    Implementation 1

    Color interface with applyColor method. RedColor implements Color interface, providing its specific implementation for applyColor
    Shape acts as abstraction and holds reference to Color object
    Circle, Square extends Shape.
    When draw is called on Circle or Square, it draws the shape and applies color using applyColor
    This decouples the shape from color, allowing both to vary independently.

*/

//Implementor interface

class Color {
  applyColor() {}
}

//Concrete Implementors
class RedColor extends Color {
  applyColor() {
    console.log('Applying red color');
  }
}

//Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {}
}

//Refined Abstraction
class Circle extends Shape {
  draw() {
    console.log('Drawing Circle');
    this.color.applyColor();
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing square');
    this.color.applyColor();
  }
}

// Test
const red = new RedColor();
const redCircle = new Circle(red);
redCircle.draw();
