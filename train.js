console.log(''); console.log('start----------------------------------');

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(json);
console.log(student);

console.log(''); console.log('end----------------------------------');