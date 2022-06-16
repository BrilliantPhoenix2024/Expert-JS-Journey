// 5 falsy Value : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Atefeh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

const yourMoney = 100;
if (yourMoney) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let hight;
if (hight) {
    console.log('Hight is defined!');
} else {
    console.log('Hight is UNDEFINED!');
}