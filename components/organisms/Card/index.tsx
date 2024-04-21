import styles from "./card.module.css";
import { RankType, SuitType, ColorType, SealType } from "@/types";
import RankAndSuit from "@/components/molecules/RankAndSuit";

type CardProps = {
  rank: RankType;
  suit: SuitType;
  seal?: SealType;
  color?: ColorType;
};

export default function Card(props: CardProps) {
  console.log(`Card: ${props.color} ${props.rank} of ${props.suit}`);
  
  const defaultSuitColor = ["diamonds", "hearts"].includes(props.suit)
    ? "red"
    : "black";

  return (
    <div className={styles.card}>
      <div>
        <RankAndSuit rank={props.rank} suit={props.suit} color={props.color || defaultSuitColor} />
      </div>
      <div>
        <RankAndSuit upsideDown rank={props.rank} suit={props.suit} color={props.color || defaultSuitColor} />
      </div>
    </div>
  );
}
