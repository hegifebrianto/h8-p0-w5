function kaliTerusRekursif(angka) {
    let mod = angka % 10;
    //console.log(mod);
    let sum = mod;
    if(angka >= 10) {
        let div = Math.floor(angka / 10);
        //console.log(div);
        sum = sum * kaliTerusRekursif(div);
        
        //console.log(sum);
    }
    return sum;
}

// TEST CASES
//console.log(kaliTerusRekursif(66)); // 8
//console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
//console.log(kaliTerusRekursif(654)); // 0
//console.log(kaliTerusRekursif(1231)); // 6