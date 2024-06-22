function sumVowels(input) {
    const word = input[0];
    let sum = 0;

    for (const letter of word) {
        if (letter === "a") {
            sum += 1;
        } else if (letter === "e") {
            sum += 2;
        } else if (letter === "i") {
            sum += 3;
        } else if (letter === "o") {
            sum += 4;
        } else if (letter === "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

sumVowels(["softuni"]);