const sum = (a: number, b: number): number => a + b;
console.log(sum(2, 2));

const sumWithOptionalTax = function (a: number, b: number, tax?: number) {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }

    return a + b;
}
console.log(sumWithOptionalTax(8, 2, 0.1));
console.log(sumWithOptionalTax(8, 2));

const applyDiscount = (price: number, percentage: number = 5) => price - (price * (percentage / 100));
console.log(applyDiscount(100));
console.log(applyDiscount(100, 10));

const calcTotal = (name: string, ...numbers: number[]) => {
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}
console.log(calcTotal('John', 1, 2, 3, 4, 5));