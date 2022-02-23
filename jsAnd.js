console.log('---------------------------------------------------------');
console.log('');

const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete'
console.log(user);

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(user));

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sumSalaries(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}

console.log(sumSalaries(salaries));


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

Object.entries(menu).forEach(item => {if (typeof menu[item[0]] == 'number') {menu[item[0]] = item[1] * 2}});

console.log(menu);

let menu1 = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric1(obj) {
    for (let key in obj) {
     if (typeof obj[key] == 'number') {
        obj[key] *= 2;
     }
    }
}

multiplyNumeric1(menu1);

console.log(menu1);

function Calculator() {
    this.read = function(a,b) {
        this.a = a;
        this.b = b;
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read(5,6);

console.log('Sum = ' + calculator.sum());
console.log('Mul = ' + calculator.mul());

// let a = 12;

// function mama() {
//     console.log('F'+c);
// }

// function batia() {
//     console.log('F'+c);
// }

// function petia() {
//     let c = 4;
//     batia();
//     mama();
//     console.log(c);
// }


// petia();






// console.log('---------------------------------------------------------');
// console.log('');

// class Clock1 {
//     constructor(name) {
//         this.name = name;
//     }

//     // get name() {
//     //     return this._name;
//     // }

//     // set name(value) {
//     //     this._name = value;
//     // }

//     sayHi() {
//         console.log(`Hi, i'm clock: ${this.name}`);
//     }
// }

// let bob = new Clock1('Bob');


// console.log(bob);
// console.log(bob.name);
// console.log(bob.sayHi());


// bob.name = "Jhon";
// console.log(bob.name);






//какие-то часы из примера на сайте
console.log('---------------------------------------------------------');
console.log('');

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  clock.stop();

console.log('---------------------------------------------------------');
console.log('');

// async function f() { let promise = await new Promise(function(resolve, reject) {
//     // resolve('done');
//     // reject(new Error("..."));
    
//     setTimeout(() => resolve('done!'), 1000);
//     //setTimeout(() => reject('Woops'), 1000);
// })

// console.log(promise);
// }

// f();

// promise.catch(console.log);

// promise.then(
//     result => console.log(result),
//     error => console.log(error) + console.log('---------------------------------------------------------') + console.log('')
// );





// function load(src) {
//     return new Promise( function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () => reject( new Error(`503, break download ${src}`));

//         document.head.append(script);
//     });
// }

// let promise1 = load("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise1.then(
//     script => console.log(`${script.src} загружен!`),
//     error => console.log(`error: ${error.message}`) + console.log('---------------------------------------------------------') + console.log('')
// );

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   alert(result); // 1
//   return result * 2;

// }).then(function(result) { // (***)

//   alert(result); // 2
//   return result * 2;

// }).then(function(result) {

//   alert(result); // 4
//   return result * 2;

// });



function calc(num) {
    if (num < 20) {
        console.log(num);
        return calc(num + 2);
    }

    return num;
}

console.log(calc(10));

let value = 1;
switch(value) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        value += value;
        break;
    default:
        console.log(0);
        value = 0;
        break;
}

try {
    let asdasd = 3;
    if (asdasd != 2) {
        throw new Error('Ne ta cifra')
    }
   

} catch(err) {
    console.log(err);
}
