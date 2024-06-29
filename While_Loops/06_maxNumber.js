function findMaxNumber(input) {
    let maxNum = Number.NEGATIVE_INFINITY;

    while (input.length > 0) {
        let command = input.shift(); // Number or Stop 

        if (command === "Stop") {
            break;
        }

        let number = Number(command); // "5" => 5

        if (number > maxNum) {
            maxNum = number;
        }
    }

    console.log(maxNum);
}

findMaxNumber([
    "-100",
    "-99",
    "-80",
    "-70",
    "Stop"
])
    