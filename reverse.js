function reverseString(str) {
    var reverse = "";
    for( i = 0; i < str.length; i++){
        var chr = str[i];
        reverse = chr + reverse;
    }
    return reverse;
}

var statement = "Hello wonderful bangladesh";
var result = reverseString(statement);
console.log(result);
var info = "it is bangla";
var res = reverseString(info);
console.log(res);