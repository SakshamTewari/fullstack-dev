/*
    Composite

    - structural pattern
    - allows objects into tree structures to represent part whole hierarchies.
    - key components:
        - component: declares interfacec for objects in composition
        - leaf: represents leaf objects in composition
        - composite: represents objects that have children
        - client:: manipulates objects in composition through component interface

*/

/*
Implementation 1

    - set of files/folders represented as a tree structure
*/

// Component
class FileSystemItem {
  getName() {}
  getSize() {}
}

// Leaf
class File extends FileSystemItem {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }
  getName() {
    return this.name;
  }
  getSize() {
    return this.size;
  }
}

// Composite
class Folder extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  getName() {
    return this.name;
  }
  getSize() {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }
}

// Client
const file1 = new File('file1.txt', 100);
const file2 = new File('file2.txt', 200);
const file3 = new File('file3.txt', 300);

const folder1 = new Folder('folder1');
folder1.addItem(file1);

const folder2 = new Folder('folder2');
folder2.addItem(file2);
folder2.addItem(file3);
folder2.addItem(folder1);

console.log(`${folder2.getName()} size: ${folder2.getSize()} bytes`);
