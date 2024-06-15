function tradeCommissions(input) {
    const city = input[0];
    const sales = Number(input[1]);
    
    let commissionPercent = 0;

    if (city === "Sofia") {
        if (sales < 0) {
            console.log("error");
            return;
        } else if (sales <= 500) {
            commissionPercent = 0.05; // 0.5 * 100 => 50 ; 0.05 * 100 => 5
        } else if (sales <= 1000) {
            commissionPercent = 0.07;
        } else if (sales <= 10000) {
            commissionPercent = 0.08;
        } else {
            commissionPercent = 0.12;
        }
    } else if (city === "Varna") {
        if (sales < 0) {
            console.log("error");
            return;
        } else if (sales <= 500) {
            commissionPercent = 0.045;
        } else if (sales <= 1000) {
            commissionPercent = 0.075;
        } else if (sales <= 10000) {
            commissionPercent = 0.10;
        } else {
            commissionPercent = 0.13;
        }
    } else if (city === "Plovdiv") {
        if (sales < 0) {
            console.log("error");
            return;
        } else if (sales <= 500) {
            commissionPercent = 0.055;
        } else if (sales <= 1000) {
            commissionPercent = 0.08;
        } else if (sales <= 10000) {
            commissionPercent = 0.12;
        } else {
            commissionPercent = 0.145;
        }
    } else {
        console.log("error");
        return;
    }

    const commissionMoney = sales * commissionPercent;
    console.log(commissionMoney.toFixed(2));
}

tradeCommissions([
    "Sofia",
    "1500"
])