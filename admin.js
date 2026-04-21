import KartyaAdmin from "./KartyaAdmin.js";
import { TERMEKLISTA } from "./termekLista.js";

const szuloElem = document.querySelector(".tabla")
const tabla = new KartyaAdmin(TERMEKLISTA[0], szuloElem)