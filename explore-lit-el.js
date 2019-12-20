import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `explore-lit-el`
 * jack test
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ExploreLitEl extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'explore-lit-el',
      },
    };
  }
}

window.customElements.define('explore-lit-el', ExploreLitEl);
