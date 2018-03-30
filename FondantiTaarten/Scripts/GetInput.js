var width, height, colorType, colorCover, colorFill, color, layers;
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

    if (color != null) {
        if (colorCover == null) {
            color = colorType;
        }
        else {
            color = colorCover;
            colorFill = "";
        }
    }
    else
    {
        color = "#ffffff";
    }

    drawCake.drawLayers(0, 300, width, height, layers, color, color, colorFill);
});

$("#Soort").on("change", function () {
    switch (this.value) {
        case "Biscuit Deeg":
            colorType = "#D19A57";
            break;
        case "Choclade":
            colorType = "#724737";
            break;
        case "Red velvet":
            colorType = "#821B28";
            break;
        default:
            colorType = "#ffffff";
            break;
    }

    if (width == null && height == null) {
        width = 300;
        heught = 100;
    }


    if (colorCover == null) {
        color = colorType;
    }
    else {
        color = colorCover;
    }

    drawCake.drawLayers(0, 300, width, height, layers, color, color, colorFill);
});

$("#Vulling").on("change", function () {
    switch (this.value) {
        case "Kindervulling (vruchtencompote en room)":
            colorFill = "#AA1D27";
            break;
        case "Gele room met Oreo vulling":
            colorFill = "#D9BE71";
            break;
        case "Champagne Room met verse frambozen":
            colorFill = "#FAECAE";
            break;
    }

    if (colorCover != null) {
        colorFill = "";
    }
    else if (colorType != null) {
        drawCake.drawLayers(0, 300, width, height, layers, color, color, colorFill);
    }
});

$("#Bekleding").on("change", function () {
    switch (this.value) {
        case "Fondant":
            colorCover = "#EDEFEE";
            break;
        case "Marsepein":
            colorCover = "#E2C583";
            break;
        default:
            colorCover = "#ffffff";
            break;
    }

    if (width == null && height == null) {
        width = 300;
        heught = 100;
    }
    colorFill = "";
    drawCake.drawLayers(0, 300, width, height, layers, colorCover, colorCover);
});