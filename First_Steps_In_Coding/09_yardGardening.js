function yardGardening(input) {
    const ONE_SQARE_METER_PRICE = 7.61;
    const PERCENT_DISCOUNT = 0.18;

    const sqareMeters = Number(input[0]);

    const priceBeforeDiscount = sqareMeters * ONE_SQARE_METER_PRICE;
    const discount = priceBeforeDiscount * PERCENT_DISCOUNT;
    const finalPrice = priceBeforeDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`);
}

yardGardening(["550"]);