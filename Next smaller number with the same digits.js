function nextSmaller(n){
  
  
 var numbers= n.toString().split("")
 var list=[]

  for (i=numbers.length-1;i>0;i--){
    numbers=n.toString().split("")
    for (j=i-1;j>-1;j--){
      if (numbers[i]<numbers[j]){
       var toSwitch=numbers.splice(i,1);
       numbers.splice(j,0,toSwitch[0]);
       splicedNum=numbers.splice(j+1).sort((a,b)=>b-a).join("")
        list.push(Number((numbers.join("")+splicedNum)))
       break;
      
      }
    }
  }
  
  console.log(list)
  if (Number(numbers.join(""))==n){
    return -1
  }
  
  
  if (list.length==1){
    return list[0]
    
  }
  
  else {
    list.sort((a,b)=>a-b)
    if ((list[(list.length-1)].toString().split("").length)!=(n.toString().split("").length)){
      return -1
    }
    else{
    return list[list.length-1]
      
    }
  }
  
}

console.log(nextSmaller(1027))
//629973385

console.log(nextSmaller(985823629973538))
//985823629973385
