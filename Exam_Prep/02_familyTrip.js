function familyTrip(input) {
    const budget = Number(input[0]); // parseFloat
    const nights = Number(input[1]); // parseInt
    let priceForNight = Number(input[2]);
    const percentExtraExpenses = Number(input[3]) / 100;  // 0 - 100 => 55 / 100 => 0.55

    if (nights > 7) {
        priceForNight *= 0.95; // 5% off
    }

    const totalHotelExpenses = nights * priceForNight;
    const totalExtraExpenses = budget * percentExtraExpenses; // budget = 1000; expense = 10%; 100lv
    const totalPrice = totalHotelExpenses + totalExtraExpenses;

    if (totalPrice > budget) {
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`)
    } else {
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`)
    }
}

familyTrip([
    "800.50",
    "8",
    "100",
    "2",
])