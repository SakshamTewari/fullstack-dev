/* 
visit(url) - marks the entry of the url in history
current() - returns url of current page
backward() - naviagte to previous url
forward() - navigate to the next url
*/

function browserHistory() {
  this.history = [];
  this.index = -1;

  this.visit = function (url) {
    this.history[++this.index] = url;
  };

  this.current = function () {
    return this.history[this.index];
  };

  this.backward = function () {
    this.index = Math.max(0, --this.index);
  };

  this.forward = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  };
}

const bh = new browserHistory();

bh.visit('A');
console.log(bh.current());

bh.visit('B');
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.forward();
console.log(bh.current());
/*
if function was not called with 'this',
const myBrowser = browserHistory()

then 'this' will point to window/global object

we could have used classes as well, which is just a synctactic sugarover functions

class BrowserHistory {
    constructor(){
        this.history = []
        this.index = -1  
    }
    
    visit(url){
        this.history[++this.index] = url}
    }

    current(){
        return this.history[this.index]
    }
    
    backward(){
        this.index = Math.max(0, --this.index)
    }
    
    forward(){
        this.index = Math.min(this.history.length-1, ++this.index)}

}
*/
