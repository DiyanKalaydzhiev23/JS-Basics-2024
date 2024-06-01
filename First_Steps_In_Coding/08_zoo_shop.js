function zooShop(input) {
    const ONE_DOG_FOOD_PRICE = 2.50;
    const ONE_CAT_FOOD_PRICE = 4;

    const dogFoodCount = Number(input[0]);
    const catFoodCount = Number(input[1]);

    const totalDogFoodPrice = dogFoodCount * ONE_DOG_FOOD_PRICE;
    const totalCatFoodPrice = catFoodCount * ONE_CAT_FOOD_PRICE;

    const totalPrice = totalDogFoodPrice + totalCatFoodPrice;

    console.log(`${totalPrice} lv.`)
}

zooShop(["5", "4"]);