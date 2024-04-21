import CardModel from "@/components/organisms/Card/cardModel";

export default class HandModel {
  cards: CardModel[];

  constructor() {
    this.cards = [];
  }

  getHand() {
    return this.cards;
  }

  setHand(cards: CardModel[]) {
    this.cards = cards;
  }

  addCard(card: CardModel) {
    this.cards.push(card);
  }
}