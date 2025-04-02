import { DivComponent } from "../../common/div-component.js";

export class CardFavoriteButton extends DivComponent {
    render() {
        this.el.classList.add('card_action_btn', 'card_action_btn__active');
        this.el.innerHTML = `<img src="static/favorites.svg" alt="Favorite icon"/>`;
        return this.el;
    }
}