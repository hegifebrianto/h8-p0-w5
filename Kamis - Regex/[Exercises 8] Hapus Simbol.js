//var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
//console.log(string.match(/[a-zA-Z0-9]+/gi));

function hapusSimbol(str) {
  let newArray = [];
  let newString= '';
  newArray = str.match(/[a-zA-Z0-9]+/gi);
  //console.log(newArray);
  for(let i=0;i<newArray.length;i++)
  {
    newString +=newArray[i];
  }
  
  return newString;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100