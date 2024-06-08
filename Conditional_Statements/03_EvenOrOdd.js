function isEvenOrOdd(input) {
    const number = Number(input[0]);

    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

isEvenOrOdd(["5"]);
isEvenOrOdd(["6"]);