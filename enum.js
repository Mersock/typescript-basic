var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["yellow"] = 11] = "yellow";
    Color[Color["green"] = 12] = "green";
})(Color || (Color = {}));
console.log("status " + Color.red);
