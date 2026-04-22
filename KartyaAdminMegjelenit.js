import  KartyaAdmin  from "./KartyaAdmin.js";
import { TERMEKLISTA } from "./termekLista.js";

export default class KartyaAdminMegjelenit {
    #lista = []
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        for (let index = 0; index < TERMEKLISTA.length; index++) {
            this.#lista.push(new KartyaAdmin(TERMEKLISTA[index], szuloElem))
        }
    }

    megjelenit(szuloElem){
        for (let index = 0; index < this.#lista.length; index++) {
            new KartyaAdmin(this.geLista()[index], szuloElem)
        }
    }

    getLista(){
        return this.#lista;
    }
}