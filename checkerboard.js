var carre = 3
var grosseur=4
var ligneP="\n"
var ligneI="\n"
var board=""

//Formation d'une ligne paire
for (var i=0;i<grosseur;i++){
    if (i%2==0)
      {for (var j=0;j<carre;j++)
        {ligneP+="x";}}
    else
      {for (var k=0;k<carre;k++)
          {ligneP+="o";}}
}

//Formation d'une ligne impaire
for (var i=0;i<grosseur;i++){
    if (i%2==0)
      {for (var j=0;j<carre;j++)
        {ligneI+="o";}}
    else
      {for (var k=0;k<carre;k++)
          {ligneI+="x";}}
}

//Formation du board
for (m=0;m<(grosseur*carre);m++){
    var D=Math.ceil((m+1)/carre)
    
        if (D%2==0)
          {board+=ligneI}
        else
           {board+=ligneP}
  
}
console.log(board);
