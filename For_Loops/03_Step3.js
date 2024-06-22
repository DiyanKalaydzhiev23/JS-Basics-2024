function step3(input) {
    const end = Number(input[0]); // 13

    for (let num = 1; num <= end; num += 3) { // 1, 4, 7, 10, ...
        console.log(num);
    }
}

step3(["8"]);