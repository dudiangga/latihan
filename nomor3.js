//ini fungsi untuk menghitung faktorial
function faktorial(n) {
let jum = 1;
while (n>>1) {
    jum = jum*n;
    n = n-1;
};
return jum;
};
// ini fungsi untuk menghitung total handshake berdasarkan rumus n!/(n-2)!/2
function handshake(n) {

    total = faktorial(n)/faktorial(n-2)/2 ;
    return total ;
}