type HandProps = {
  children: React.ReactNode;
};

export default function Hand(props: HandProps) {
  return (
    <div className="flex-1 flex flex-row justify-evenly">
      {props.children}
    </div>
  );
}
