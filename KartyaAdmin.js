export default class KartyaAdmin {
    #obj = {}
    constructor(obj = {index, nev, leiras, kep, ar, ertekeles}, szuloElem){
        this.#obj = obj,
        this.szuloElem = szuloElem,
        this.megjelenit()
    }

    getObj(){
        return this.#obj
    }

    megjelenit(){
        let kod =`
            <tr>
                <th>${this.#obj.nev}</th>
                <th>${this.#obj.leiras}</th>
                <th><img src="${this.#obj.kep}" alt="${this.#obj.index}"></th>
                <th>${this.#obj.ar}</th>
                <th>${this.#obj.ertekeles}</th>
                <th><button class="hozaadas">✓</button></th>
                <th><button class="torles">✕</button></th>
            </tr>
        `
        this.szuloElem.insertAdjacentHTML("beforeend", kod)
    }
}