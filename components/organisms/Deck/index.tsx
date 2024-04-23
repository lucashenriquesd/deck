type DeckProps = {
  children: React.ReactNode;
};

export default function Deck(props: DeckProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
