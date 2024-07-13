function fruitShop(input) {
    const starwberryPrice = Number(input[0]);
    const raspberryPrice = starwberryPrice / 2;
    const orangePrice = raspberryPrice * 0.60;
    const bananasPrice = raspberryPrice * 0.20;

    const bananasKg = Number(input[1]);
    const orangesKg = Number(input[2]);
    const raspberriesKg = Number(input[3]);
    const starwberriesKg = Number(input[4]);

    const totalCostStarwberries = starwberryPrice * starwberriesKg;
    const totalRasperryPrice = raspberryPrice * raspberriesKg;
    const totalOrangesPrice = orangePrice * orangesKg;
    const totalBananasPrice = bananasPrice * bananasKg;

    const totalPrice = totalCostStarwberries + totalRasperryPrice + totalOrangesPrice + totalBananasPrice;

    console.log(totalPrice.toFixed(2));
}


fruitShop([
    "48",
    "10",
    "3.3",
    "6.5",
    "1.7",
])