var Name =[3, 6, 2, 10, 3, 2, 5, 8];
var uniqeName =[];

for(i = 0; i < Name.length; i++){
    var element = Name[i];
    var index = uniqeName.indexOf(element);
    if(index == -1){
        uniqeName.push(element);
    }
}
console.log(uniqeName);