import Kartya from "./Kartya.js";

export default class kartyamegjelenit {
  #termeklista = [];
  constructor(termeklista = [], szuloElem) {
    this.#termeklista = termeklista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  getTermeklista() {
    return this.#termeklista;
  }

  megjelenit() {
    this.szuloElem.innerHTML = "";
    this.#termeklista.forEach((adat, index) => {
      const kartya = new Kartya(adat, this.szuloElem);
    });
  }
}
