function wordStream(input) {
    const word = input[0];

    // Option 1
    // for (let i = 0; i < word.length; i++) {
    //     console.log(word[i]);
    // }

    // Option 2
    for (const letter of word) {
        console.log(letter);
    }
}

wordStream(["softuni"]);