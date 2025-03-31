import { DivComponent } from "../../common/div-component.js";
import './loader.css'
export class Loader extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.classList.add('loader');

    return this.el;
  }
}