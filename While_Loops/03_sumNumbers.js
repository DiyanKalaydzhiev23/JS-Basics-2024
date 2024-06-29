function sumNumbers(input) {
    const maxNumber = Number(input.shift()); // 100 => input = ["10", "20", "30", "40"]

    let sum = 0;

    while (sum < maxNumber) {
        sum += Number(input.shift());
    }

    console.log(sum);
}

sumNumbers([
    "100",
    "95",
    "20",
    "30",
    "40"
])