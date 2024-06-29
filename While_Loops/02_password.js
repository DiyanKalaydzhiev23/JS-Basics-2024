function login(input) {
    const username = input.shift(); // "Dido"
    const password = input.shift(); // "admin"

    while (true) {
        let currentPass = input.shift();

        if (currentPass === password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}


login([
    "dido",
    "admin",
    "12434",
    "dido",
    "admin"
]);