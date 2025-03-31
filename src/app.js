'use strict';

import { MainView } from "./views/main/main.js";
import { NotFound } from "./views/notFound/notFound.js";
import { Favorites } from "./views/favorites/favorites.js";

class App {
  routes = [{ path: '#search', view: MainView }, { path: '#favorites', view: Favorites }];
  appState = { favorites: [] };
  currentView = null;

  constructor() {
    window.addEventListener('hashchange', this.route);
    this.route()
  }

  route = () => {
    if (this.currentView) this.currentView.destroy();

    const path = window.location.hash;
    const view = this.routes.find(r => r.path === path)?.view;
    console.log('view', view)
    console.log('path', path)
    console.log('path', path)

    if (!view) {
      const notFound = new NotFound();
      notFound.render();
    }

    this.currentView = new view(this.appState);
    this.currentView.render();
  }


}

new App();