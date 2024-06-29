function findMinNumber(input) {
    let minNum = Number.POSITIVE_INFINITY;

    while (input.length > 0) {
        let command = input.shift(); // Number or Stop 

        if (command === "Stop") {
            break;
        }

        let number = Number(command); // "5" => 5

        if (number < minNum) {
            minNum = number;
        }
    }

    console.log(minNum);
}