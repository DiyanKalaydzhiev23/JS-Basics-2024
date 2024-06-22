// Soltion 1
function numbersDividedByNine(input) {
    const start = Number(input[0]); // 100
    const end = Number(input[1]); // 200

    let sum = 0;

    for (let num = start; num <= end; num++) {
        if (num % 9 == 0) {
            sum += num;
        }
    }

    console.log("The sum:", sum);

    for (let num = start; num <= end; num++) {
        if (num % 9 == 0) {
            console.log(num);
        }
    }
}

function numbersDividedByNine2(input) {
    const start = Number(input[0]); // 100
    const end = Number(input[1]); // 200

    let sum = 0;
    let output = ""; // "" + "109\n" + "118\n" => 109\n118\n

    for (let num = start; num <= end; num++) {
        if (num % 9 == 0) {
            sum += num;
            output += num.toString() + "\n";
        }
    }

    console.log("The sum:", sum);
    console.log(output);
}

numbersDividedByNine2(["100", "200"]);