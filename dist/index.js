"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let newSales = 123;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let randonInfo = ['good'];
let user = [1, 'Mosh'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2021) {
    if (taxYear < 2022) {
        return income * 0.2;
    }
    return income * 0.3;
}
calculateTax(10000);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    if (!name) {
        console.log('Hola!');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(4);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log('a');
let employee = {
    id: 1,
    name: 'John',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'Mosh';
//# sourceMappingURL=index.js.map