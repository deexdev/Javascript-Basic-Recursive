function findPrimeRow(rowNumber) {
    if (rowNumber < 1) {
        return "Input harus lebih besar dari 0";
    }

    let primeCount = 0;
    let currentNumber = 2; // Mulai pencarian dari bilangan 2
    let result = [];

    while (primeCount < rowNumber) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result.push(currentNumber);
            primeCount++;
        }

        currentNumber++;
    }

    return result.pop();
}

console.log(findPrimeRow(1));
console.log(findPrimeRow(2));
console.log(findPrimeRow(10));
