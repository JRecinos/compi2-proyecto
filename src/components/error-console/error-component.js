import { css, html, BaseLit } from "../base-element";
import { SharedStyles } from "../style-helpers/shared-styles";
import {} from "../../backend/utilities/plantillaError";
class ErrorComponent extends BaseLit {
  static get properties() {
    return {
      optimization: { type: Boolean },
      erores: { type: Array },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          --paper-tabs-selection-bar-color: var(--default-primary-color);
          height: 90%;
          background: white;
          display: block;
          padding: 5px 0 0 0;
          height: 100%;
        }

        .header {
          background: var(--accent-color);
          color: white;
          border-radius: 5px 5px 0 0;
          font-size: 1.5em;
          padding: 8px;
        }

        div.row {
          width: 100%;
        }

        div.row:nth-child(n) {
          background: #f6faee;
        }
        div.row:nth-child(2n) {
          background: #a9c4d4;
          color: white;
        }

        div.header > div {
          width: 25%;
          font-size: 14px;
          display: inline-block;
          font-weight: bolder;
          text-align: center;
          background: var(--accent-color);
        }

        div.row > div {
          width: 24%;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
          text-align: justify;
        }

        main {
          overflow: auto;
          height: 100%;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.errores = [];
    window.addEventListener("graficar-errores", (e) => {
      this.errores = e.detail;
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <main id="main-content">
        <div class="header">
          <div style="text-align: center; font-weight: bolder; width: 23%;">
            Tipo
          </div>
          <div style="text-align: center; font-weight: bolder; width: 23%;">
            Descripcion
          </div>
          <div style="text-align: center; font-weight: bolder; width: 23%;">
            Linea
          </div>
          <div style="text-align: center; font-weight: bolder; width: 23%;">
            Columna
          </div>
        </div>
        ${this.errores.map(
          (err) => html`<div class="row">
            <div style="text-align: center;">${err.getTipo()}</div>
            <div>${err.getDescripcion()}</div>
            <div style="text-align: center;">${err.getLinea()}</div>
            <div style="text-align: center;">${err.getColumna()}</div>
          </div>`
        )}
      </main>
    `;
  }
}

window.customElements.define("error-component", ErrorComponent);
