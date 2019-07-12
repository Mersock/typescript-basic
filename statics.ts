class setStatic {
    static width: number;
    static height: number;

    static showDisplay(): void {
        console.log("width = " + setStatic.width);
        console.log("height = " + setStatic.height);
    }
}

setStatic.height = 1;
setStatic.width = 2;
setStatic.showDisplay();
