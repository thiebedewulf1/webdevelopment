const setup = () => {
    let tekst = "onoorbaar";
    let trigram = "";
    let i = 0;
    while(i < tekst.length - 2){
        trigram += tekst.substring(i,i + 3) + "\n";
        i++;
    }
    console.log(trigram);
}
window.addEventListener("load", setup);