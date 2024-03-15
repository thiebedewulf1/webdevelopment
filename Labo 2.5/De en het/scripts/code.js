const setup = () => {
    let button = document.getElementById("verander")
    button.addEventListener("click", verander);
}

const verander = () => {
    let tekst = document.getElementById("deEnHet").value;
    let res = " ";
    tekst.toLowerCase();
    let woorden = tekst.split(' ');
    console.log(woorden);
    let i = 0;
    while(i < woorden.length){
        if(woorden[i] === "de"){
            woorden[i] = "het";
            res += woorden[i] + " ";
            i++;
        } else {
            res += woorden[i] + " ";
            i++;
        }
    }
    document.getElementById("resultaat").innerText = res;
}
window.addEventListener("load", setup);