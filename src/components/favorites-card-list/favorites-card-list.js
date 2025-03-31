import './favorites-card-list.css';
import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";


export class FavoritesCardList extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('favorites_cards__container')
    this.el.innerHTML = `
       <h1 class="favorites_cards__title">Избранные книги</h1>
    `;

    const cardGridContainer = document.createElement('div');
    cardGridContainer.classList.add('favorites_cards__list_container');

    for (const card of this.appState.favorites) {
      cardGridContainer.append(new Card(this.appState, card).render())
    }


    this.el.append(cardGridContainer);

    return this.el;
  }
}