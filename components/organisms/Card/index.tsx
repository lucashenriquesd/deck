import styles from "./card.module.css";
import { RankType, SuitType, ColorType, SealType } from "@/types";
import CardModel from "./cardModel";
import RankAndSuit from "@/components/molecules/RankAndSuit";

type CardProps = {
  rank: RankType;
  suit: SuitType;
  seal?: SealType;
  color?: ColorType;
};

export default function Card(props: CardProps) {
  const cardObject = new CardModel(props.rank, props.suit, props.color, props.seal);
  console.log(`Card: ${JSON.stringify(cardObject.getCard())}`);

  return (
    <div className={styles.card}>
      <RankAndSuit
        rank={props.rank}
        suit={props.suit}
        color={cardObject.getColor()}
      />
      <RankAndSuit
        upsideDown
        rank={props.rank}
        suit={props.suit}
        color={cardObject.getColor()}
      />
    </div>
  );
}
