import { SuitType, ColorType } from "@/types";
import Diamonds from "./Diamonds";
import Clubs from "./Clubs";
import Hearts from "./Hearts";
import Spades from "./Spades";

type SuitProps = {
  color: ColorType;
  suit: SuitType;
};

export default function Suit(props: SuitProps) {
  const suitComponentsLookup = {
    diamonds: Diamonds,
    clubs: Clubs,
    hearts: Hearts,
    spades: Spades,
  };

  const SuitComponent = suitComponentsLookup[props.suit];

  return (
    <div>
      <SuitComponent fill={props.color} />
    </div>
  );
}
