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

let a = 12;

function mama() {
    console.log('F'+c);
}

function batia() {
    console.log('F'+c);
}

function petia() {
    let c = 4;
    batia();
    mama();
    console.log(c);
}


petia();
