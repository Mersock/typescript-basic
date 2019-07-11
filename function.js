function showMessage() {
    console.log("show message");
}
//optional parameters = ?
function addMessage(id, name, price) {
    console.log(id, name, price);
}
//rest parameters
function addNumber() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
}
showMessage();
addMessage(1, 'name', 3333);
addMessage(1, 'name');
addNumber(1, 2);
