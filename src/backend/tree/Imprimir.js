import { NodoMM } from "./NodoMM";

export const Imprimir = class extends NodoMM {
  constructor(_token, _texto, _location, _hijos) {
    super(_token, _texto, _location, _hijos);
  }

  ejecutar() {
    let hijo1 = this.hijos[0].ejecutar();
    let toPrint = "";
    if (typeof hijo1 === "number") {
      toPrint = String(hijo1);
    }
    if (typeof hijo1 === "string") {
      toPrint = hijo1;
    }
    if (typeof hijo1 == "boolean") {
      toPrint = String(hijo1);
    }
    window.textoConsola.push(toPrint);
    window.dispatchEvent(
      new CustomEvent("console-changed", { detail: window.textoConsola })
    );
  }
};
