function sumDigits(input) {
    const number = input[0]; // "12345"

    let sum = 0;

    for (const digit of number) {
        sum += Number(digit); // "1" => Number("1") => 1
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumDigits(["123"]);