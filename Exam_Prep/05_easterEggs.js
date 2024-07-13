function easterBattle(input) {
    let index = 0;

    let playerOneEggs = Number(input[index++]);
    let playerTwoEggs = Number(input[index++]);

    while (index < input.length) {
        let command = input[index++];  // one or two or End

        if (command === "End") {
            console.log(`Player one has ${playerOneEggs} eggs left.`);
            console.log(`Player two has ${playerTwoEggs} eggs left.`);
            return;
        } else if (command === "one") {
            playerTwoEggs--;
        } else if (command === "two") {
            playerOneEggs--;
        }

        if (playerOneEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`)
            return;
        }
        
        if (playerTwoEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`)
            return;
        }
    }
}


easterBattle([
    "5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End",
])