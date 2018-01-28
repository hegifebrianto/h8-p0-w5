function totalDigitRekursif(angka) {
    let mod = angka % 10;
    //console.log(mod);
    let sum = mod;
    if(angka >= 10) {
        let div = Math.floor(angka / 10);
        //console.log(div);
        sum += totalDigitRekursif(div);
        //console.log(sum);
    }
    return sum;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

