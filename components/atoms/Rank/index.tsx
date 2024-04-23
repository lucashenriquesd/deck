import styles from "./rank.module.css";
import { RankType, ColorType } from "@/types";

type RankProps = {
  rank: RankType;
  color: ColorType;
};

export default function Rank(props: RankProps) {
  const rankLookup = {
    "ace": "A",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "jack": "J",
    "queen": "Q",
    "king": "K",
    "joker": "Joker",
    "planet": "Planet",
    "tarot": "Tarot",
    "spectral": "Spectral"
  };

  return (
    <div>
      <span style={{ color: props.color}}>{rankLookup[props.rank] || props.rank}</span>
    </div>
  );
}