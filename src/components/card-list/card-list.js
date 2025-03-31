import { DivComponent } from "../../common/div-component.js";
import './card-list.css';
import { Loader } from "../loader/loader.js";
import { Card } from "../card/card.js";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('card_list_content');


    const title = document.createElement('h1');
    title.classList.add('card_list_content__title');
    title.textContent = `Найдено - ${this.parentState.booksCount ?? 0} книг`
    container.append(title)

    const cardListContainer = document.createElement('div');
    cardListContainer.classList.add('card_list_content__list');
    container.append(cardListContainer);

    if (this.parentState.isLoading) {
      const loader = new Loader().render();
      const loaderContainer = document.createElement('div');
      loaderContainer.classList.add('card_list_content__loaderContainer');
      loaderContainer.append(loader);
      cardListContainer.append(loaderContainer)
    } else {
      cardListContainer.innerHTML = '';

      for (const card of this.parentState.list.slice(0, 6)) {
        cardListContainer.append(new Card(this.appState, card).render());
      }
    }




    this.el.append(container);
    return this.el;
  }

}