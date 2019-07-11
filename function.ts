function showMessage() {
    console.log("show message");
}

//optional parameters = ?
function addMessage(id:number,name:string,price?:number){
    console.log(id,name,price);
}

//rest parameters
function addNumber(...num:number[]){
    var sum:number = 0;
    var i;
    for (i=0;i<num.length;i++){
        sum += num[i];
    }
    console.log(sum);
}

showMessage();
addMessage(1,'name',3333);
addMessage(1,'name');
addNumber(1,2);
