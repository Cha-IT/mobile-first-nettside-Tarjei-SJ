import meny from "./meny.json" with { type: "json" };


const menyListe = document.querySelector("#menyListe");
meny.forEach(rett => {
    console.log(rett);
    const nyListe=document.createElement("ul");
    const listeElement = document.createElement("li");
    listeElement.innerHTML = `<h3>${rett.rett}</h3>${rett.beskrivelse}, ${rett.pris} kr,`;
    nyListe.appendChild(listeElement);

    if (rett.bilde) {
        const bildeElement = document.createElement("img");
        bildeElement.src = `bilder/${rett.bilde}`;
        nyListe.appendChild(bildeElement);
    }
    menyListe.appendChild(nyListe);
});