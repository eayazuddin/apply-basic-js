// 10! = 1*2*3*4*5*6*7*8*9*10
// 9! = 1*2*3*4*5*6*7*8*9
// 6! = 1*2*3*4*5*6
// 5! = 1*2*3*4*5
// 7! = 6!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n
// 
function factorial(n) {
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial( n - 1); 
    }
    
}
    var result = factorial(10);
        console.log(result);
