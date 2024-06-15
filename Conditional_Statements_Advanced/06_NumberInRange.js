function numberInRange(input) {
    const number = Number(input[0]);

    if (number >= -100 && number <= 100 && number != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}  

numberInRange(["-1"]);
numberInRange(["0"]);
numberInRange(["300"]);