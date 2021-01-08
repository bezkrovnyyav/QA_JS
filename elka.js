let n =  +prompt('vvedi chislo')
let i, j
 
 
for(i=1; i<=n; i++)
    { 
        for(j=i; j<n; j++)
        {
            console.put(" ");
        }
 
        //Prints the pyramid pattern
        for(j=1; j<=(2*i-1); j++)
        {
            console.put("*");
        }
 
        console.put("<br>");

}
