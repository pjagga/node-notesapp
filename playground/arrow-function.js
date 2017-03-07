// var square = (x) => {
//   var result = x*x;
//   return result;
// };
var square = x => result = x*x;
console.log(square(9));


var user = {
  name:'Peeps',
  sayHi: () => {
    console.log(`Hi. I am ${this.name}.`)
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I am ${this.name}.`)
  }
};

//Not gonna works and prints - I am undefined this. won't work in expression statement instead sayHiAlt will work
user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1, 2, 3);