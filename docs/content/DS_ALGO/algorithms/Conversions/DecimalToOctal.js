function decimalToOctal(num) {
    let oct = 0;
    let c = 0;
    while (num > 0) {
        const r = num % 8;
        oct = oct + r * Math.pow(10, c++);
        num = Math.floor(num / 8); // basically /= 8 without remainder if any
    }
    return oct;
}

export { decimalToOctal };

// > decimalToOctal(2)
// 2

// > decimalToOctal(8)
// 10

// > decimalToOctal(65)
// 101

// > decimalToOctal(216)
// 330

// > decimalToOctal(512)
// 1000
