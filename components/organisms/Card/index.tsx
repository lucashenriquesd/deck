import { useState } from "react";
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
  const [selected, setSelected] = useState(false);
  const cardObject = new CardModel(props.rank, props.suit, props.color, props.seal);
  console.log(`Card: ${JSON.stringify(cardObject.getCard())}`);
  const classNames = [
    "flex", 
    "flex-col", 
    "justify-between", 
    "min-w-[229px]", 
    "min-h-[313px]", 
    "p-4", 
    "mb-5", 
    "rounded", 
    "bg-white", 
    "border", 
    "transition-all", 
    "duration-200", 
    "transform", 
    "hover:border-[#ffd700]",
    "hover:border-[3px]"
  ];

  if (selected) {
    classNames.push("-translate-y-7");
  }

  return (
    <div className={classNames.join(" ")} onClick={() => {setSelected(!selected)}}>
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
