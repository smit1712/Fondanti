class GetInput {

    constructor() {
        this.width, this.height, this.colorType, this.colorCover, this.colorFill, this.color, this.layers;
        this.drawCake = new DrawCake();
    }

    GetSize(value) {
        var size = parseInt(value);
        switch (size) {
            case 15:
                this.width = 200;
                this.height = 50;
                this.layers = 1;
                break;
            case 30:
                this.width = 250;
                this.height = 75;
                this.layers = 2;
                break;
            case 45:
                this.width = 300;
                this.height = 100;
                this.layers = 3;
                break;
        }

        if (this.color != null) {
            if (this.colorCover == null) {
                this.color = this.colorType;
            }
            else {
                this.color = this.colorCover;
                this.colorFill = "";
            }
        }
        else {
            this.color = "#ffffff";
        }

        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
    }

    GetType(value) {

        switch (value) {
            case "Biscuit Deeg":
                this.colorType = "#D19A57";
                break;
            case "Choclade":
                this.colorType = "#724737";
                break;
            case "Red velvet":
                this.colorType = "#821B28";
                break;
            default:
                this.colorType = "#ffffff";
                break;
        }

        if (this.width == null && this.height == null) {
            this.width = 300;
            this.heught = 100;
        }


        if (this.colorCover == null) {
            this.color = this.colorType;
        }
        else {
            this.color = this.colorCover;
        }

        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
    }

    GetFilling(value) {
        switch (value) {
            case "Kindervulling (vruchtencompote en room)":
                this.colorFill = "#AA1D27";
                break;
            case "Gele room met Oreo vulling":
                this.colorFill = "#D9BE71";
                break;
            case "Champagne Room met verse frambozen":
                this.colorFill = "#FAECAE";
                break;
        }

        if (this.colorCover != null) {
            this.colorFill = "";
        }
        else if (this.colorType != null) {
            this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
        }
    }

    GetCover(value) {
        switch (value) {
            case "Fondant":
                this.colorCover = "#EDEFEE";
                break;
            case "Marsepein":
                this.colorCover = "#E2C583";
                break;
            default:
                this.colorCover = "#ffffff";
                break;
        }

        if (this.width == null && this.height == null) {
            this.width = 300;
            this.heught = 100;
        }
        this.colorFill = "";
        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.colorCover, this.colorCover);
    }
}
var getInput = new GetInput();

// When one of these selectboxes are changed
$("#Grootte").on("change", function () {
    getInput.GetSize(this.value);
});

$("#Soort").on("change", function () {
    getInput.GetType(this.value);
});

$("#Vulling").on("change", function () {
    getInput.GetFilling(this.value);
});

$("#Bekleding").on("change", function () {
    getInput.GetCover(this.value);
});

// When one of these selectboxes are loaded by the session
$("#Grootte").html(function () {
    if (this.value != "Voer het aantal personen in voor de taart" && this.value != "") {
        getInput.GetSize(this.value);
    }
});

$("#Soort").html(function () {
    if (this.value != "Kies het soort cake voor de taart" && this.value != "") {
        getInput.GetType(this.value);
    }
});

$("#Vulling").html(function () {
    if (this.value != "Kies uw vulling" && this.value != "") {
        getInput.GetFilling(this.value);
    }
});

$("#Bekleding").html(function () {
    if (this.value != "Kies uw bekleding" && this.value != "") {
        getInput.GetCover(this.value);
    }
});