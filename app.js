import meny from "./meny.json" with { type: "json" };

const bestillingsListe = document.querySelector("#bestillingsListe");
const menyListe = document.querySelector("#menyListe");

const totalPrisElement = document.createElement("p");
totalPrisElement.id = "totalPris";
totalPrisElement.textContent = "Totalpris: 0 kr";


let totalPris = 0;

meny.forEach(rett => {
    console.log(rett);
    const nyListe = document.createElement("li");
    const listeElement = document.createElement("li");

    

    nyListe.appendChild(listeElement);
    listeElement.innerHTML = `<h3>${rett.rett}</h3>${rett.beskrivelse} <b>${rett.pris} kr</b>`;
    
    if (rett.bilde) {
        const bildeElement = document.createElement("img");
        bildeElement.src = `bilder/${rett.bilde}`;
        listeElement.appendChild(bildeElement);
    }

    const knappElement = document.createElement("button");
    knappElement.innerText = "Legg i handlekurven";
    listeElement.appendChild(knappElement);

    knappElement.addEventListener("click", () => {
        const valgtRett = document.createElement("li");
        valgtRett.textContent = rett.rett + " " + rett.pris + " kr";
        bestillingsListe.appendChild(valgtRett);
        console.log("La til:", rett.rett);

        totalPris += rett.pris;
        totalPrisElement.textContent = `Total: ${totalPris} kr`;
    });

    menyListe.appendChild(nyListe);

    bestillingsListe.appendChild(totalPrisElement);
});