// Deze class zorgt ervoor dat de goeie data in de DrawCake class komt
class GetInput {

    // Initialiseer alle classe variabelen
    constructor() {
        this.width, this.height, this.colorType, this.colorCover, this.colorFill, this.color, this.layers;
        this.drawCake = new DrawCake();
    }

    // Deze methode pakt de grootte voor de taart
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

        // Wanneer de kleur van de taart niet leeg is
        if (this.color != null) {
            // Wanneer de kleur van de bekleding leeg is en wanneer de type cake niet leeg is
            if (this.colorCover == null && this.colorType != null) {
                // De kleur van de cake is het type cake
                this.color = this.colorType;
            }
            else {
                // De vulling en de type cake kleur verdwijnt en de kleur van de bekleding neemt over
                this.color = this.colorCover;
                this.colorFill = "";
            }
        }
        else {
            // Zet de kleur naar wit
            this.color = "#ffffff";
        }
        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
    }

    // Deze methode pakt de type cake
    GetType(value) {
        switch (value) {
            case "Biscuit Deeg":
                this.colorType = "#D19A57";
                break;
            case "Chocolade":
                this.colorType = "#724737";
                break;
            case "Red velvet":
                this.colorType = "#821B28";
                break;
            default:
                this.colorType = "#ffffff";
                break;
        }

        // Als de cake geen breedte of hoogte heeft, krijgt de cake een standaart waarde
        if (this.width == null && this.height == null) {
            this.width = 300;
            this.heught = 100;
        }
        // Alse de bekleding niet gezet is word de kleur gelijk aan het type cake
        if (this.colorCover == null) {
            this.color = this.colorType;
        }
        else {
            this.color = this.colorCover;
        }

        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
    }

    // Deze methode pakt de kleur van de vulling
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
        // Als de taart geen bekleding heeft mag de taart worden getekend met de vulling
        if (this.colorCover != null) {
            this.colorFill = "";
        }
        else if (this.colorType != null) {
            this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.color, this.color, this.colorFill);
        }
    }

    // Deze methode pakt de bekleding van de cake
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

        // Als de taart nog geen breedte en grootte heeft dan krijgt de taart standaart waardes
        if (this.width == null && this.height == null) {
            this.width = 300;
            this.heught = 100;
        }

        this.colorFill = "";
        this.drawCake.drawLayers(0, 300, this.width, this.height, this.layers, this.colorCover, this.colorCover);
    }
}

// Initialiseer de class
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