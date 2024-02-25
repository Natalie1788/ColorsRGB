// med prototyp
function Color(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
}

Color.prototype.rgb = function() {
    return `rgb(${this.red},${this.green},${this.blue})`;
};

Color.prototype.hex = function() {
    const redHex = this.red.toString(16).padStart(2, '0');
    const greenHex = this.green.toString(16).padStart(2, '0');
    const blueHex = this.blue.toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
};

Color.prototype.rgba = function() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
};

// skapar en ny färg
const myColor = new Color(250, 150, 20, 0.8);
console.log(myColor.rgb()); 
console.log(myColor.hex()); 
console.log(myColor.rgba()); 

//För att testa ändrar vi bakgrundsfärgen på kvadraten
const kvadrat = document.getElementById("color-square");
kvadrat.style.backgroundColor = myColor.rgba();
