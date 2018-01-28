function countProfit(shoppers) {
  let i,j;
  let provit = [];
  
  
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  for(i=0;i<listBarang.length;i++)
  {
    //console.log(listBarang[i]);
    provit.push({ product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
    })
  }

/*
  for(i=0;i<provit.length;i++)
  {
    console.log(provit[i]);
    
  }
  for(j=0;j<shoppers.length;j++)
  {
    console.log(shoppers[j]);
  }*/
  
  for(j=0;j<shoppers.length;j++)
  {
  
    for(i=0;i<provit.length;i++)
    {
      //console.log(listBarang[i]);
      //if(provit[j].product == listBarang[i][0])
        //console.log(listBarang[i][1]);
      //console.log(provit[i].product+'<=>'+shoppers[j].name+'-'+shoppers[j].name);
      //valid
      if(shoppers[j].product != provit[i].product)
        continue;
      else{
        //console.log('true');
        // console.log(shoppers[j].name);
        // provit[i].shoppers.push(shoppers[j].name);
        // console.log(provit[i].leftOver+'-'+shoppers[j].amount);
        // console.log(provit[j].totalProfit);
        if(provit[i].leftOver > shoppers[i].amount)
        {
          provit[i].shoppers.push(shoppers[i].name);
          provit[i].leftOver = provit[i].leftOver - shoppers[j].amount;
          //console.log(listBarang[i][1]+'*'+shoppers[j].amount);
          provit[i].totalProfit = provit[i].totalProfit + listBarang[i][1] *shoppers[j].amount;
        }
        else
          continue;
      }
    }  
    
  }
  console.log(provit);
  
  // you can only write your code here!
  
}

// TEST CASES
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
//console.log(countProfit([])); //[]