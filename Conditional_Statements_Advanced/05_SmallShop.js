function smallShop(input) {
    const product = input[0];
    const city = input[1];
    const quantity = Number(input[2]);

    let productPrice = 0;

    if (city === "Sofia") {
        if (product === "coffee") {
            productPrice = 0.50;
        } else if (product === "water") {
            productPrice = 0.80;
        } else if (product === "beer") {
            productPrice = 1.20;
        } else if (product === "sweets") {
            productPrice = 1.45;
        } else if (product === "peanuts") {
            productPrice = 1.60;
        }
    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            productPrice = 0.40;
        } else if (product === "water") {
            productPrice = 0.70;
        } else if (product === "beer") {
            productPrice = 1.15;
        } else if (product === "sweets") {
            productPrice = 1.30;
        } else if (product === "peanuts") {
            productPrice = 1.50;
        }
    } else if (city === "Varna") {
        if (product === "coffee") {
            productPrice = 0.45;
        } else if (product === "water") {
            productPrice = 0.70;
        } else if (product === "beer") {
            productPrice = 1.10;
        } else if (product === "sweets") {
            productPrice = 1.35;
        } else if (product === "peanuts") {
            productPrice = 1.55;
        }
    }

    const totalCost = quantity * productPrice;
    console.log(totalCost);
}

smallShop([
    "coffee",
    "Varna",
    "2",
]);