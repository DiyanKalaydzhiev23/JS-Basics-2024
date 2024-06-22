function evenPowers(input) {
    const powers = Number(input[0]); // 3
    
    // // option 1 - input 10_000 => 10_000 iterations
    // for (let power = 0; power <= powers; power++) { // 0, 1, 2, 3
    //     if (power % 2 == 0) {
    //         console.log(Math.pow(2, power));
    //     }
    // }

    // option 2 - better input 10_000 => 5_000 iterations
    for (let power = 0; power <= powers; power += 2) { // 0, 2, 4, 6, ...
        console.log(Math.pow(2, power));
    }
}

evenPowers(["4"]);