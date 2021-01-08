//найти макс число

let maxNum = 0;
let num = +prompt('enter number','');
 
for(; num != 0;){
    num = +prompt('enter number','') 
        if(num % 2 !=0) continue;
        if(num > maxNum){
            maxNum = num;
        }
 }
 
console.log(maxNum)