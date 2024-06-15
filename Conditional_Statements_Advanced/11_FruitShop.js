function fruitShop(input) {
    const product = input[0];
    const day = input[1];
    const quantity = Number(input[2]);

    let productPrice = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (product == "banana") {
            productPrice = 2.50;
        } else if (product == "apple") {
            productPrice = 1.20;
        } else if (product == "orange") {
            productPrice = 0.85;
        } else if (product == "grapefruit") {
            productPrice = 1.45;
        } else if (product == "kiwi") {
            productPrice = 2.70;
        } else if (product == "pineapple") {
            productPrice = 5.50;
        } else if (product == "grapes") {
            productPrice = 3.85;
        } else {
            console.log("error");
            return;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        if (product == "banana") {
            productPrice = 2.70;
        } else if (product == "apple") {
            productPrice = 1.25;
        } else if (product == "orange") {
            productPrice = 0.90;
        } else if (product == "grapefruit") {
            productPrice = 1.60;
        } else if (product == "kiwi") {
            productPrice = 3;
        } else if (product == "pineapple") {
            productPrice = 5.60;
        } else if (product == "grapes") {
            productPrice = 4.20;
        } else {
            console.log("error");
            return;
        }
    } else {
        console.log("error");
        return;
    }

    const totalPrice = quantity * productPrice;
    console.log(totalPrice.toFixed(2));
}

fruitShop([
    "apple",
    "Tuesday",
    "2"
])
    