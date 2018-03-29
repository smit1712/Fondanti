var width, height, color, layers;
var drawCake = new DrawCake();


$("#Grootte").on("change", function () {
    var size = parseInt(this.value);
    switch (size) {
        case 0:
            width = 200;
            height = 50;
            layers = 1;
            break;
        case 1:
            width = 250;
            height = 75;
            layers = 2;
            break;
        case 2:
            width = 300;
            height = 100;
            layers = 3;
            break;
    }

    if (color == null) {
        color = "#ffffff";
    }
    drawCake.drawLayers(150, 300, width, height, layers, color, color);
});
$("#Soort").on("change", function () {
    switch (this.value) {
        case "Biscuit Deeg":
            color = "#D19A57";
            break;
        case "Choclade":
            color = "#724737";
            break;
        case "Red velvet":
            color = "#821B28";
            break;
        default:
            color = "#ffffff";
            break;
    }

    if (width == null && height == null) {
        width = 300;
        heught = 100;
    }

    drawCake.drawLayers(150, 300, width, height, layers, color, color);
});
$("#Bekleding").on("change", function () {
    switch (this.value) {
        case "Fondant":
            color = "#EDEFEE";
            break;
        case "Marsepein":
            color = "#E2C583";
            break;
        default:
            color = "#ffffff";
            break;
    }

    if (width == null && height == null) {
        width = 300;
        heught = 100;
    }
    drawCake.drawLayers(150, 300, width, height, layers, color, color);
});