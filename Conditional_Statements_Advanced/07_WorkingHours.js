// Solution 1 - not optimal
function workingHours(input) {
    const hour = Number(input[0]);
    const day = input[1];

    const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (workingDays.includes(day) && hour >= 10 && hour <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

// Solution 2
function workingHours2(input) {
    const hour = Number(input[0]);
    const day = input[1];

    if (day != "Sunday" && hour >= 10 && hour <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingHours2([
    "11",
    "Sunday"
])
    