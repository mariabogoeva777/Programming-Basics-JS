function yardGreening(input) {

    let squareMeters = (input[0]);
    let priceYardGreening = (input[0]) * 7.61
    let discount = 0.18 * priceYardGreening
    let finalPrice = priceYardGreening - discount

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"])
yardGreening(["150"])

//"The final price is: {крайна цена на услугата} lv."
//" "The discount is: {отстъпка} lv."