var spech = "I  am a   good person.";
var count = 0;
for(i = 0; i < spech.length; i++ ){
    var char = spech[i];
    if(char == " " && spech[i-1] != " "){
       count++;
    }
}
count++;
console.log(count);