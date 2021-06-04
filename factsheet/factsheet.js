const factsheetTemplate = `

`;

class Factsheet extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = factsheetTemplate;
  }
}
