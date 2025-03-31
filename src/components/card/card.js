import { DivComponent } from "../../common/div-component.js";
import './card.css'

export class Card extends DivComponent {
  constructor(appState, cardProps) {
    super();
    this.appState = appState;
    this.cardProps = cardProps;
  }

  #addToFavorite = () => {
    this.appState.favorites.push(this.cardProps);
  }


  #removeFromFavorite = () => {
    this.appState.favorites = this.appState.favorites.filter((f) => f.key !== this.cardProps.key)
  }

  render() {
    const existFavorites = this.appState.favorites.find((f) => f.key === this.cardProps.key);

    this.el.classList.add('card_wrapper');
    this.el.innerHTML = `
      <div class="card__image_wrapper">
        <img src="https://covers.openlibrary.org/b/olid/${this.cardProps?.cover_edition_key ?? ''}-M.jpg" class="card__image"/>
      </div>
      <div class="card__info">
        <p class="card_tags">${this.cardProps?.id_standard_ebooks?.[0] ?? 'Не указано'}</p>
        <h2 class="card_title">${this.cardProps?.title ?? 'Не указано'}</h2>
        <p class="card_author">${this.cardProps?.author_name?.[0] ?? 'Не указано'}</p>
        
        <div class="card_action_wrapper">
            <button class="card_action_btn ${existFavorites ? 'card_action_btn__active' : ''}">
                ${existFavorites ? `<img src="static/favorites.svg" alt="Favorite icon"/>` : `<img src="static/favorite-white.svg" alt="Favorite icon"/>`}
            </button>
        </div>
     </div>
    `;

    const btn = this.el.querySelector('.card_action_btn');
    if (existFavorites) {
      btn.addEventListener('click', this.#removeFromFavorite);
    } else {
      btn.addEventListener('click', this.#addToFavorite);
    }

    return this.el;
  }
}