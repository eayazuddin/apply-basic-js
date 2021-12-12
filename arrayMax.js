var marks =[20, 30, 40, 50, 100, 50, 10, 300];
var max = marks[0];
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest valu is: ", max);