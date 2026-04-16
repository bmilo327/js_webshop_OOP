export default class Kartya {
    #obj = {};
    constructor(obj = {index, nev, leiras, kep, ar, ertekeles}, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.kartyamegjelenit();
    }

    kartyamegjelenit(){
        let kod = `
        <div class="kep">
          <img src="${this.#obj.kep}" alt="">
          <h1>${this.#obj.nev}</h1>
          <p>${this.#obj.leiras}</p>
          <p>${this.#obj.ar}</p>
          <p>${this.#obj.ertekeles}</p>
        </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    megtekintEsemeny(){
        console.log("megtekint esemény");
        const m = new CustomEvent("megtekint", {detail:this.#obj.index});
        window.dispatchEvent(m);
    }

    kosarbaEsemeny(){
        console.log("kosárba esemény");
        const k = new CustomEvent("kosárba", {detail:this.#obj.index});
        window.dispatchEvent(k);
    }
}