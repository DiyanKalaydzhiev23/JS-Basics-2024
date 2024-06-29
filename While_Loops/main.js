let input = ["Pizza", "Pasta", "Burger", "Full"];

// let index = 0; 

// while (true) {
//     let currentDish = input[index++];

//     if (currentDish === "Full") {
//         console.log("I am full");
//         break;
//     } else {
//         console.log("Diyan is eating a", currentDish);
//     }
// }

// let string = "hello";

// for (const el of string) {
//     console.log(el);
// }


// while (false) {
//     console.log("hello");
// }

// do {
//     console.log("hello");
// } while (false);
 

let number = 0;

while (number < 5) {
    number++;
    
    if (number % 2 == 0) {
        continue;
    }

    console.log("is odd");
}