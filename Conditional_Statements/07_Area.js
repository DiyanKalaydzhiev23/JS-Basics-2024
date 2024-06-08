function shapeArea(input) {
    const shape = input[0];
    let area;

    if (shape === "square") {
        const sideA = Number(input[1]);
        area = sideA * sideA;
    } else if (shape === "rectangle") {
        const sideA = Number(input[1]);
        const sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (shape === "circle") { 
        const radius = Number(input[1]);
        area = Math.PI * radius * radius
    } else if (shape === "triangle") {
        const base = Number(input[1]);
        const height = Number(input[2]);
        area = (base * height) / 2;
    }

    console.log(area.toFixed(3));
}

shapeArea((["square", "5"]));
shapeArea((["rectangle", "7", "2.5"]));
shapeArea((["circle", "6"]));
shapeArea((["triangle", "4.5", "20"]));