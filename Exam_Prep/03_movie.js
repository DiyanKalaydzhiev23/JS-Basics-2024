function movie(input) {
    const budget = Number(input[0]);
    const destination = input[1];
    const season = input[2];
    const days = Number(input[3]);

    let dayPrice;

    if (destination === "Dubai") {
        if (season === "Winter") {
            dayPrice = 45000;
        } else if (season === "Summer") {
            dayPrice = 40000;
        }

        dayPrice *= 0.70;  // 30% off
    } else if (destination === "Sofia") {
        if (season === "Winter") {
            dayPrice = 17000;
        } else if (season === "Summer") {
            dayPrice = 12500;
        }

        dayPrice *= 1.25;
    } else if (destination === "London") {
        if (season === "Winter") {
            dayPrice = 24000;
        } else if (season === "Summer") {
            dayPrice = 20250;
        }
    }

    const totalCost = dayPrice * days;

    if (totalCost > budget) {
        console.log(`The director needs ${(totalCost - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`The budget for the movie is enough! We have ${(budget - totalCost).toFixed(2)} leva left!`)
    }
}

movie([
    "400000",
    "Sofia",
    "Winter",
    "20",
])