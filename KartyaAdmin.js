export default class KartyaAdmin {
    #obj = {}
    constructor(obj = {index, nev, leiras, kep, ar, ertekeles}, szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit()
    }

    megjelenit(){
        let kod =`
            <tr>
                <td>${this.#obj.nev}</td>
                <td>${this.#obj.leiras}</td>
                <td><img src="${this.#obj.kep}" alt="${this.#obj.index}"></td>
                <td>${this.#obj.ar}</td>
                <td>${this.#obj.ertekeles}⭐</td>
                <td><td>
                <td><button class="hozaadas">✓</button></td>
                <td><button class="torles">✕</button></td>
            </tr>
        `
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    getObj(){
        return this.#obj
    }
}