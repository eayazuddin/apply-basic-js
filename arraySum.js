function getArraySum(numbers) {
        var sum = 0;
        for(i = 0; i < numbers.length; i++){
            var element = numbers[i];
            sum = sum + element;    
        }
        return sum;
}
var numbers =[30, 40, 60, 40, 50];

var result = getArraySum(numbers);
console.log("Total of the number: ", result);