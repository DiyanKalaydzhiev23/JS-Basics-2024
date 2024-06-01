function projectCreation(input) {
    const TIME_FOR_ONE_PROJECT = 3;

    const name = input[0];
    const projectsCount = Number(input[1]);

    const totalTimeNeeded = projectsCount * TIME_FOR_ONE_PROJECT;

    console.log(`The architect ${name} will need ${totalTimeNeeded} hours to complete ${projectsCount} project/s.`);
}

projectCreation(["Dido", "4"]);