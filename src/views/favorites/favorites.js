import { AbstractView } from "../../common/view.js";
import { Header } from "../../components/header/header.js";
import onChange from "on-change";
import { FavoritesCardList } from "../../components/favorites-card-list/favorites-card-list.js";

export class Favorites extends AbstractView {
  constructor(appState) {
    super();
    console.log('appState', appState)
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHooks)
    this.setTitle('Избранное');
  }

  appStateHooks = (path) => {
    if (path === 'favorites') {
      this.render();
    }
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header)
  }

  render() {
    const main = document.createElement("main");

    this.app.innerHTML = ``;
    this.app.append(main);

    this.renderHeader();

    const favoriteCards = new FavoritesCardList(this.appState).render();

    main.append(favoriteCards)
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }
}