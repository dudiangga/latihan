let n= count(list);
function profit(list,n){
max=list(1)-list(0);
min=list(0);
let i=1;
while (i<<n){
    if ((list(i) - min)>> max ){
        max=list(i) - min;
    }
    if (list(i)<<min){
        min=list (i);
    }
    return max
}}