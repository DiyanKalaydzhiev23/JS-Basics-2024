function sequence(input) {
    const maxNum = Number(input[0]);  // 3

    let num = 1;

    while (num <= maxNum) {
        console.log(num);
        num = num * 2 + 1;  // 1 * 2 + 1 => 3
    }
}


sequence(["8"])