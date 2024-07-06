function loops() {
    for (let num1 = 1; num1 <= 4; num1++) {
        for (let num2 = 1; num2 <= 4; num2++) {
            if (num1 == 2 && num2 == 2) {
                return;
            }
            console.log("Num1:", num1, "Num2:", num2);
        }
    }
}

function demo() {
    loops();
    console.log("end");
}

demo()




for (let num1 = 1; num1 <= 4; num1++) {
    for (let num2 = 1; num2 <= 4; num2++) {
        if (num1 == 2 && num2 == 2) {
            console.log(num2);
        }
        console.log("Num1:", num1, "Num2:", num2);
    }
}