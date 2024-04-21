import Rank from "@/components/atoms/Rank";
import { RankType, SuitType, ColorType } from "@/types";
import Suit from "@/components/atoms/Suit";

type RankAndSuitProps = {
  rank: RankType;
  suit: SuitType;
  color: ColorType;
  upsideDown?: boolean;
};

export default function RankAndSuit(props: RankAndSuitProps) {
  const makeUpsideDown = props.upsideDown ? "rotate(180deg)" : "none";

  return (
    <div style={{ display: "flex", transform: makeUpsideDown }}>
      <div style={{ width: 20, textAlign: "center" }}>
        <Rank rank={props.rank} color={props.color} />
        <Suit suit={props.suit} color={props.color} />
      </div>
    </div>
  );
}
