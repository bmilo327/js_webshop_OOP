import KartyaMegjelenit from "./KartyaMegjelenit.js";
import { TERMEKLISTA } from "./termekLista.js";

const szuloElem = document.querySelector(".termekek");

new KartyaMegjelenit(TERMEKLISTA, szuloElem);