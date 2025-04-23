/* In-memory filesystem library that supports

    - createDirectory(name)
    - changeDirectory(path)
    - addFile(name)
    - deleteFile(name)
    - deleteDirectory(name)
    - getRootDirectory
    - getCurDirectory
    - getCurDirectoryPath


*/

const FileSystem = function () {
  this.directory = { root: {} };
  this.currentDir = this.directory['root'];
  this.currentDirPath = 'root';

  // create a Directory
  this.createDirectory = function (name) {
    this.currentDir[name] = {};
  };

  // change Directory
  this.changeDirectory = function (path) {
    this.currentDir = this._changeDirectoryHelper(path);
    this.currentDirPath = path;
  };

  // helper function to change directory
  this._changeDirectoryHelper = function (path) {
    const paths = path.split('-');
    let current = this.directory;
    for (let key of paths) {
      current = current[key];
    }
    return current;
  };

  // get current directory path
  this.getCurDirectoryPath = function () {
    return this.currentDirPath;
  };

  // get current directory
  this.getCurDirectory = function () {
    return this.currentDir;
  };

  // add file
  this.addFile = function (fileName) {
    if (this.currentDir.files) {
      this.currentDir.files.push(fileName);
    } else {
      this.currentDir['files'] = [fileName];
    }
    return true;
  };

  // delete file
  this.deleteFile = function (fileName) {
    this.currentDir.files = this.currentDir.files.filter((e) => e !== fileName);
    return true;
  };

  // delete directory
  this.deleteDirectory = function (name) {
    delete this.currentDir[name];
  };

  // get root directory
  this.getRootDirectory = function () {
    return this.directory;
  };
};

// Test

const dir = new FileSystem();
dir.createDirectory('Saksham');
console.log(dir.getCurDirectory());
dir.changeDirectory('root-Saksham');
console.log(dir.getCurDirectory());
// dir.addFile('index.html');
// dir.addFile('app.js');
// dir.changeDirectory('root');
// dir.createDirectory('practice');
// dir.changeDirectory('root-Saksham');
// dir.addFile('index.html');
// dir.addFile('app.js');
// dir.createDirectory('build');
// dir.changeDirectory('root-Saksham-build');
// dir.addFile('a.png');
// dir.addFile('b.jpg');
// dir.deleteFile('a.png');
// dir.changeDirectory('root');
// dir.deleteDirectory('Saksham');
console.log(dir.getRootDirectory());
