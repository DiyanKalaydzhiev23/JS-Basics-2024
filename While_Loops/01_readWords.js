function readWords(input) {
    let idx = 0;
    
    while (true) {
        let word = input[idx++];

        if (word === "Stop") {
            break;
        }

        console.log(word);
    }
}


readWords([
    "Burger",
])