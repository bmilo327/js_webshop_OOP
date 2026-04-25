export default class Kartya {
    #obj = {};
    constructor(obj = {nev, index, leiras, kep, ar, ertekeles}, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.kartyamegjelenit();
        this.megtekintGomb = this.container.querySelector(".megtekint");
        this.kosarbaGomb = this.container.querySelector(".kosarba");

        this.megtekintGomb.addEventListener("click", () => this.megtekintEsemeny());
        this.kosarbaGomb.addEventListener("click", () => this.kosarbaEsemeny());
    }

    getObj(){
        return this.#obj;
    }

    kartyamegjelenit(){
        this.container = document.createElement("div");
        this.container.classList.add("kep");
        let kod = `
          <img src="${this.#obj.kep}" alt="${this.#obj.index}">
          <h1>${this.#obj.nev}</h1>
          <p>${this.#obj.leiras}</p>
          <p>${this.#obj.ar} Ft</p>
          <p>${this.#obj.ertekeles}⭐</p>
          <div class="gombok">
            <button class="megtekint">🔍</button>
            <button class="kosarba">🛒</button>
          </div>`;
        this.container.innerHTML = kod;
        this.szuloElem.appendChild(this.container);
    }

    megtekintEsemeny(){
        console.log("megtekint esemény", this.#obj.index);
        const m = new CustomEvent("megtekint", {detail:this.#obj.index});
        window.dispatchEvent(m);
    }

    kosarbaEsemeny(){
        console.log("kosárba esemény", this.#obj.index);
        const k = new CustomEvent("kosárba", {detail:this.#obj.index});
        window.dispatchEvent(k);
    }
}