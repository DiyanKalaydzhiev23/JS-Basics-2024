function weekOrWorkDay(input) {
    const dayOfTheWeek = input[0];

    switch (dayOfTheWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}

weekOrWorkDay(['Monday']);
weekOrWorkDay(['May']);