const setup = () => {

    let btnBewerk = document.getElementById("btnBewerk");
    btnBewerk.addEventListener("click", bewerk);
}
const bewerk = () => {
    let tekst = document.getElementById("tekst").value;
    let counter = 0;
    tekst = tekst.toLowerCase();
    let index = tekst.indexOf("an");
    while(index !== -1){
        counter++;
        index = tekst.indexOf("an", index + 1);
    }
    console.log(counter);
    let pElement=document.getElementById("resultaat");
    pElement.innerText= "Resultaat: " + counter;
}
window.addEventListener("load", setup);