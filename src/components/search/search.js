import { DivComponent } from "../../common/div-component.js";
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search = () => {
    const input = this.el.querySelector('.search__input');
    this.state.searchQuery = input.value;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <img src="static/search.svg" alt="Search"/>
        <input 
          type="text" 
          placeholder="Найти книгу по автору..." 
          class="search__input"
          value="${this.state.searchQuery ?? ''}"
        />
      </div>
      
      <button class="search__button" aria-label="искать">
        <img src="static/searchWhite.svg" alt="Close"/>
      </button>
    `;

    this.el.querySelector('.search__button').addEventListener('click', this.search);
    this.el.querySelector('.search__input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.search();
    });

    return this.el;
  }
}