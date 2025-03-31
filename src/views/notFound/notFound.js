import { AbstractView } from "../../common/view.js";
import './notFound.css'
export class NotFound extends AbstractView {
  constructor() {
    super();
    this.setTitle("Page not found");
  }

  render() {
    const notFoundContainer = document.createElement('div');
    notFoundContainer.classList.add('notFound');
    this.app.innerHTML = ``;
    this.app.append(notFoundContainer);

    notFoundContainer.innerHTML = `
      <div>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <a href="#search">
          ← На главную
        </a>
      </div>
    `;
  }
}