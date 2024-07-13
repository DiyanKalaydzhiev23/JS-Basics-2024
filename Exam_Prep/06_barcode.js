function generateOddBarcodes(input) {
    const startNum = input[0];
    const endNum = input[1];

    let result = "";

    // Number(startNum)
    for (let barcode = parseInt(startNum); barcode <= parseInt(endNum); barcode++) {
        let barcodeStr = barcode.toString();  // 3355 => "3355"
        let isValid = true;

        for (let idx = 0; idx < barcodeStr.length; idx++) {
            if (
                parseInt(startNum[idx]) > parseInt(barcodeStr[idx]) || 
                parseInt(barcodeStr[idx]) > parseInt(endNum[idx]) || 
                parseInt(barcodeStr[idx]) % 2 === 0
            ) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            result += barcodeStr + " ";
        }
    }

    console.log(result);
}

generateOddBarcodes([
    "2345",
    "6789",
])