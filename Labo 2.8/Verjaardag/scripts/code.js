const setup = () => {

    var verjaardag = new Date('2005-05-29');
    var huidigeDatum = new Date();
    var verschilInTijd = huidigeDatum.getTime() - verjaardag.getTime();
    var verschilInDagen = Math.floor(verschilInTijd / (1000 * 3600 * 24));
    console.log("Aantal dagen " + verschilInDagen + " dagen");

}
window.addEventListener("load", setup);