function changeMe(arr) {
  let i,j=0;
  let dt = new Date();
  let obj= new Array();
  let age;
  //console.log(dt.getFullYear());
  
  
  for(i=0;i<arr.length;i++)
  {
    //console.log(arr[i]);
    //console.log(arr[i][j+3]);
    if(arr[i][j+3] != undefined)
      arr[i][j+3] = dt.getFullYear() - arr[i][j+3];
    else
      arr[i][j+3] = 'Invalid Birth Year';
    
    obj[i] = { 
      firstName: arr[i][j],
      lastName: arr[i][j+1],
      gender: arr[i][j+2],
      age: arr[i][j+3]
      
      
    }  
    //console.log(arr[i][j]); 
      
  }
  
  return obj;
  //console.log(obj);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""