type TableProps = {
  children: React.ReactNode;
};

export default function Table(props: TableProps) {
  return (
    <div className="flex-1 flex flex-col">
      {props.children}
    </div>
  );
}