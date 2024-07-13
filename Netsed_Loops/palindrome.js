var isPalindrome = function(x) {
    const number = x.toString();

    for (let i = 0; i <= number.length / 2; i++) {
        if (number[i] !== number[number.length - i - 1]) {
            return false;
        }
    }

    return true;
};