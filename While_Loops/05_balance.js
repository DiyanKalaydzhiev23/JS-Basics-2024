function balance(input) {
    let total = 0;

    while (input.length > 0) {
        let command = input.shift(); // Number or "NoMoreMoney"

        if (command === "NoMoreMoney") {
            break;
        }

        let amount = Number(command);  // "6" => 6

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += amount;
        console.log("Increase:", amount.toFixed(2));
    }

    console.log("Total:", total.toFixed(2));
}

balance(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"])
    