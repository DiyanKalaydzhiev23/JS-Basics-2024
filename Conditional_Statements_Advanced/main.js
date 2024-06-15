let number = 1;

switch (number) {
    case 1:
        console.log("Low number");
        break;
    case 2:
        console.log("Mid Number");
        break;
    case 3:
        console.log("High Number");
        break;
    default:
        console.log("Not a valid number");
        break;
}

if (number == 1) {
    console.log("Low number");
} else if (number == 2) {
    console.log("Mid Number");
} else if (number == 3) {
    console.log("High Number");
} else {
    console.log("Not a valid number");
}

let personName = "pesho";

switch (personName) {
    case "pesho":
        console.log("This is pesho");
        break;
    case "diyan":
        console.log("This is diyan");
        break;
}


const input = "1:2";

const [team1, team2] = input.split(":"); // ["1", "2"]

console.log(team1, team2);

true && true => true 
true && false => false 
false && true => false 
false && false => false

true || true => true
false || true => true
true || false => true
false || false => false

!false => true
if (!(5 < 4))


if ("Tuesday") {  // "" === false "ireruefbfbiwfbow" => true
    console.log("hi");
}

function sumNumbers(num1, num2) {
    return;

    console.log("hi");
}

const result = sumNumbers(1, 2);
console.log(result);