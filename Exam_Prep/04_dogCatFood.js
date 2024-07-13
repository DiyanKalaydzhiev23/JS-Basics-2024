function food(input) {
    const PERCENT_BISCUITS = 0.10;

    let index = 0;

    const days = Number(input[index++]);
    const totalFood = Number(input[index++]);

    let totalDogFoodEaten = 0;
    let totalCatFoodEaten = 0;
    let totalBiscuitsEaten = 0;

    for (let day = 1; day <= days; day++) {
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);

        totalDogFoodEaten += dogFood;
        totalCatFoodEaten += catFood;

        if (day % 3 == 0) {
            let biscuits = (dogFood + catFood) * PERCENT_BISCUITS;
            totalBiscuitsEaten += biscuits;
        }
    }

    const totalFoodEaten = totalDogFoodEaten + totalCatFoodEaten;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuitsEaten)}gr.`)
    console.log(`${(totalFoodEaten / totalFood * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(totalDogFoodEaten / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${(totalCatFoodEaten / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`)
}

food([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40",
])