function login(input) {
    const REAL_PASSWORD = "s3cr3t!P@ssw0rd";

    const userInputPassword = input[0];

    if (userInputPassword === REAL_PASSWORD) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

login(["s3cr3t!P@ssw0rd"]);
login(['wevuiuwhif']);