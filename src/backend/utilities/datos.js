window.indices = 0;
window.strArbol = "";
window.textoConsola = [];
/////////////////////////////////////////////ESTRUCTURAS///////////////////////////////////////////

window.errores = [];

window.limpiarTodo = function () {
  window.indices = 0;
  window.strArbol = "";
  window.errores = [];
  window.textoConsola = [];
  window.dispatchEvent(new CustomEvent("console-changed", { detail: [] }));
};
