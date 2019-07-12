var setStatic = /** @class */ (function () {
    function setStatic() {
    }
    setStatic.showDisplay = function () {
        console.log("width = " + setStatic.width);
        console.log("height = " + setStatic.height);
    };
    return setStatic;
}());
setStatic.height = 1;
setStatic.width = 2;
setStatic.showDisplay();
