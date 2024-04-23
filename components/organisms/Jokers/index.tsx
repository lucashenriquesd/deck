type JokersProps = {
  children?: React.ReactNode;
};

export default function Jokers(props: JokersProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}