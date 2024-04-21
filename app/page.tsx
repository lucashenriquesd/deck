import styles from "./page.module.css";
import Card from "@/components/organisms/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card rank="ace" suit="diamonds" color="purple" />
      <Card rank="king" suit="hearts" color="orange" />
      <Card rank="5" suit="clubs" color="blue" />
      <Card rank="jack" suit="spades" color="green" />
    </main>
  );
}
