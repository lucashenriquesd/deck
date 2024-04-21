import styles from "./page.module.css";
import Hand from "@/components/organisms/Hand";
import Card from "@/components/organisms/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hand>
        <Card rank="ace" suit="diamonds" color="orange" />
        <Card rank="king" suit="hearts" />
        <Card rank="5" suit="clubs" color="blue" />
        <Card rank="jack" suit="spades" />
      </Hand>
    </main>
  );
}
