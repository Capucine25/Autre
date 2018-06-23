function nextSmaller(n){
  
  
 var numbers= n.toString().split("")
 var list=[]

  for (i=numbers.length-1;i>0;i--){
  //var j=i-1
    for (j=i-1;j>-1;j--){
      if (numbers[i]<numbers[j]){
       var toSwitch=numbers.splice(i,1);
       numbers.splice(j,0,toSwitch[0]);
        list.push(Number(numbers.join("")))
       break;
      
      }
    }
  }

  if (Number(numbers.join(""))==n){
    return -1
  }
  

  if (list.length==1&& list.length==n.length){
    return list[0]
    
  }
  
  else {
    list.sort((a,b)=>a-b)
    console.log(list)
    if ((list[0].toString().split("").length)!=(n.toString().split("").length)){
      return -1
    }
    else{
    return list[list.length-1]
      
    }
  }
  
}

console.log(nextSmaller(985823629973538))
//985823629973385
