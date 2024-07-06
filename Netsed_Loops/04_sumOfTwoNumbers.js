function sumOfTwoNumbers(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    const magicalNum = Number(input[2]);

    let combinations = 0;

    for (let num1 = start; num1 <= end; num1++) {
        for (let num2 = start; num2 <= end; num2++) {
            combinations++;

            if (num1 + num2 === magicalNum) {
                console.log(
                    `Combination N:${combinations} (${num1} + ${num2} = ${magicalNum})`
                );
                return;
            }
        }
    }

    console.log(`${combinations} combinations - neither equals ${magicalNum}`);
}

sumOfTwoNumbers([
    "1",
    "10",
    "5",
])