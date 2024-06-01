function inchesToCentimeters(input) {
    const CENTIMETERS_MULTIPLIER = 2.54;

    const inches = Number(input[0]);
    const centimeters = inches * CENTIMETERS_MULTIPLIER;
    
    console.log(centimeters);
}

inchesToCentimeters(['5']);