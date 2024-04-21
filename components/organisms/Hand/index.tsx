import styles from "./hand.module.css";

type CardProps = {
  children: React.ReactNode;
};

export default function Hand(props: CardProps) {
  return (
    <div className={styles.hand}>
      {props.children}
    </div>
  );
}
