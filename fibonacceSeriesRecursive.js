function fibonacce(n) {
    if(n == 0){
        return[0];

    }
    else if(n == 1){
        return[0, 1];
    }
    else{
        var fibo = fibonacce(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;

    }
    

    
    
}
var result = fibonacce(10);
    console.log(result);