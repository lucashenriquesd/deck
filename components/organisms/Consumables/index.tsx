type ConsumablesProps = {
  children?: React.ReactNode;
};

export default function Consumables(props: ConsumablesProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}