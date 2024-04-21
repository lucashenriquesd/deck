import { RankType, SuitType, ColorType, SealType } from "@/types";

export default class CardModel {
  rank: RankType;
  suit: SuitType;
  color: ColorType;
  seal?: SealType;

  constructor(rank: RankType, suit: SuitType, color?: ColorType, seal?: SealType) {
    const defaultSuitColor = ["diamonds", "hearts"].includes(suit)
    ? "red"
    : "black";

    this.rank = rank;
    this.suit = suit;
    this.color = color || defaultSuitColor;
    this.seal = seal;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  getColor() {  
    return this.color;
  }

  getSeal() {
    return this.seal;
  }

  getCard() {
    return {
      rank: this.rank,
      suit: this.suit,
      color: this.color,
      seal: this.seal
    };
  }
}