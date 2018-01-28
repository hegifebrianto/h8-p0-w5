function makanTerusRekursif(waktu) {
    let count = Math.floor(waktu/15);
    
    
    if(waktu <= 15) 
      count = 1;
    else {
      //console.log(count)
      if(waktu%15 != 0 ){
        count = count + makanTerusRekursif(count)
      }
        
    }
    
    if(waktu <= 0)
      count=0;  
      
    
  return count;    
      
       //makanTerusRekursif(waktu - 15)
      //console.log(waktu/15);
    //return count;  
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
