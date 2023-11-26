"use strict";
const sum = (a, b) => a + b;
console.log(sum(2, 2));
const sumWithOptionalTax = function (a, b, tax) {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }
    return a + b;
};
console.log(sumWithOptionalTax(8, 2, 0.1));
console.log(sumWithOptionalTax(8, 2));
const applyDiscount = (price, percentage = 5) => price - (price * (percentage / 100));
console.log(applyDiscount(100));
console.log(applyDiscount(100, 10));
const calcTotal = (name, ...numbers) => {
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
};
console.log(calcTotal('Eduardo', 1, 2, 3, 4, 5));
