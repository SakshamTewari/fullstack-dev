/* Visitor design pattern

    - lets us add further operations to objects
    - without modifying them
    - without modifying the classes of elements on which it operates
    - separates an algorithm from object structure by moving the logic into a separate object.

    Components
        Visitor : declares a visit operation
        ConcreteVisitor : implements operation declared by visitor
        Elements : declares an accept method (takes visitor as arguement)
        ConcreteElement : implements accept method
        ObjectStructure : enumarate its elements / provides way to access them

*/

/* Implementation #1 */

//Visitor interface
class Visitor {
  visitCircle(circle) {}
  visitRectangle(rectangle) {}
}

//Concrete Visitors
class AreaVisitor extends Visitor {
  visitCircle(circle) {
    const area = Math.PI * Math.pow(circle.radius, 2);
    console.log(`Circle area : ${area}`);
  }
  visitRectangle(rectangle) {
    const area = rectangle.width * rectangle.height;
    console.log(`Rectangle area : ${area}`);
  }
}

//Element interface
class Shape {
  accept(visitor) {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  accept(visitor) {
    visitor.visitCircle(this);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  accept(visitor) {
    visitor.visitRectangle(this);
  }
}
