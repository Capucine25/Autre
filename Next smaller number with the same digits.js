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
  
  list.sort((a,b)=>a-b)

  
  if (list.length==0){
    return -1
  }
  
  if ((list[(list.length-1)].toString().split("").length)
  !=(n.toString().split("").length)){
      return -1}
  

  if (list.length==1){
    return list[0]
    
  }
  
  else {
    return list[list.length-1]
      
    }
