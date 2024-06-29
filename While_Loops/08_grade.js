function grade(input) {
    const TOTAL_CLASSES = 12;
    const UNPLEASING_GRADE = 4;

    const name = input.shift();  // "Mimi"
    
    let currentClass = 1;
    let failedTimes = 0;
    let gradesSum = 0;

    while (input.length > 0) {
        let grade = Number(input.shift());  // 5

        if (grade < UNPLEASING_GRADE) {
            failedTimes++;

            if (failedTimes > 1) {
                console.log(`${name} has been excluded at ${currentClass} grade`)
                break;
            }
        } else {
            gradesSum += grade;
            currentClass++;  // 13
        }

        if (currentClass > TOTAL_CLASSES) {
            let averageGrade = gradesSum / TOTAL_CLASSES;
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
    }
}


grade([
    "Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
])