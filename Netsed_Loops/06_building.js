function building(input) {
    const floors = Number(input[0]);
    const rooms = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {
        let result = '';
        
        for (let room = 0; room < rooms; room++) {
            if (floor === floors) {
                result += `L${floor}${room} `;
            } else if (floor % 2 == 0) {
                result += `O${floor}${room} `;
            } else {
                result += `A${floor}${room} `;
            }
        }

        console.log(result);
    }
}


building(["6", "4"]);