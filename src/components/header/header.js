import { DivComponent } from "../../common/div-component.js";
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
          <img src="static/logo.svg" alt="Logo"/>
      </div>
      <div class="menu">
          <a href="#search" class="menu__item">
            <img src="static/search.svg" alt="Search"/>
            <p>Поиск</p>
         </a>
        <a href="#favorites" class="menu__item">
            <img src="static/favorites.svg" alt="Favorites"/>
            <p>Избранное</p>  
        <div class="menu__counter">${this.appState.favorites.length}</div>
        </a>  
      </div>
    `;
    return this.el;
  }
}