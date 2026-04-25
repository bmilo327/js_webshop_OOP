import KartyaMegjelenit from "./KartyaMegjelenit.js";
import { TERMEKLISTA } from "./termekLista.js";

const szuloElem = document.querySelector(".termekek");

new KartyaMegjelenit(TERMEKLISTA, szuloElem);

const modal = document.getElementById("termek-modal");
const modalBody = document.querySelector(".modal-body");
const bezarGomb = document.querySelector(".bezar");

window.addEventListener("megtekint", (event) => {
    const termekIndex = event.detail;
    const termek = TERMEKLISTA.find(t => t.index === termekIndex);

    if (termek) {
        modalBody.innerHTML = `
            <div class="nagy-kartya">
                <img src="${termek.kep}" alt="${termek.nev}">
                <div class="nagy-kartya-info">
                    <h2>${termek.nev}</h2>
                    <p>${termek.leiras}</p>
                    <p>Ár: ${termek.ar} Ft</p>
                    <p>Értékelés: ${termek.ertekeles}⭐</p>
                </div>
            </div>
        `;
        modal.style.display = "flex"; 
    }
});

bezarGomb.addEventListener("click", () => {
    modal.style.display = "none";
});