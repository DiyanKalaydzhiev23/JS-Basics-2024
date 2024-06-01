function concatenateData(input) {
    // OPTION 1
    // const firstName = input[0];
    // const lastName = input[1];
    // const age = input[2];
    // const city = input[3];

    // OPTION 2
    const [firstName, lastName, age, city] = input;
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`)
}

concatenateData(["Dido", "Kalaydzhiev", 20, "Blagoevgrad"]);