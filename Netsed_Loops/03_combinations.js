function combinations(input) {
    const number = Number(input[0]);

    let countCombinations = 0;

    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                if (x1 + x2 + x3 === number) {
                    countCombinations++;
                }
            }
        }
    }

    console.log(countCombinations);
}

combinations(["100000"]);