import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/card-list/card-list.js";

export class MainView extends AbstractView {
  state = {
    booksCount: 0,
    list: [],
    isLoading: false,
    searchQuery: '',
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHooks);
    this.state = onChange(this.state, this.stateHooks);
    this.setTitle("Поиск книг");
  }


  appStateHooks = (path) => {
    if (path === 'favorites') {
      this.render();
    }
  };

  stateHooks = async (path) => {
    if (path === 'searchQuery') {
      this.state.isLoading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset);
      this.state.list = data.docs ?? []
      this.state.booksCount = data.numFound;
      this.state.isLoading = false;
    }
    if (path === 'isLoading' || path === 'list') {
      this.render()
    }
  };

  loadList = async (query, offset) => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}`);
      return res.json();
    } catch (e) {
      console.error(e);
    }

  }

  render() {
    const main = document.createElement("main");
    main.classList.add('main')

    this.app.innerHTML = ``;
    this.app.append(main);

    this.renderHeader();

    const search = new Search(this.state).render();
    main.prepend(search)

    const cardList = new CardList(this.appState, this.state).render();
    main.append(cardList)

  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header)
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }
}