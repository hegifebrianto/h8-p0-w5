function shoppingTime(memberId, money) {

  let i,j,temp=[]; 
  let SALE = [['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Uniklooh',175000],['Casing Handphone',50000]];
  let obj = {};
  obj = {
      memberId:memberId,
      money:money,
      listPurchased:[],
      changeMoney:money
    }
  
  //sort
  for (i=0; i<SALE.length; i++){
    for (j=0; j<SALE.length; j++){
        if (SALE[i][1] > SALE[j][1]){
            temp = SALE[i];
            SALE[i] = SALE[j];
            SALE[j] = temp;
        }   
    }    
  }
  //console.log(SALE);
  
  if(memberId == '')
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  else if(money <50000 )
    return 'Mohon maaf, uang tidak cukup';
  else if(memberId == undefined && money == undefined)
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  else
  {
    
    for(i=0;i<SALE.length; i++)
    {
      if(money <SALE[i][1])
        continue;
      else
      {
        obj.listPurchased.push(SALE[i][0]);
        //console.log(SALE[i][1]);
        obj.changeMoney =  parseInt(obj.changeMoney) - parseInt(SALE[i][1]);
      }
        
      //console.log(SALE[i][1]);
    }
    //obj.listPurchased.push('sepatu');
    //obj.push({listPurchased:'Sepatu Stacattu'});
    //obj.push(listPurchased[0]:'Sepatu Stacattu');
    
    return obj;    
  }

  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja