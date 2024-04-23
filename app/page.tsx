"use client";

import { useState } from "react";
import { GameContext } from "@/contexts/GameContext";
import Hand from "@/components/organisms/Hand";
import Card from "@/components/organisms/Card";
import Consumables from "@/components/organisms/Consumables";
import Table from "@/components/organisms/Table";
import Jokers from "@/components/organisms/Jokers";

export default function Home() {
  const [game, setGame] = useState(null);

  return (
    <main className="flex flex-row justify-evenly items-center p-16 min-h-screen">
      <GameContext.Provider value={{ game, setGame }}>
        <Table>
          <Jokers></Jokers>
          <Consumables></Consumables>
          <Hand>
            <Card rank="ace" suit="diamonds" color="orange" />
            <Card rank="king" suit="hearts" />
            <Card rank="5" suit="clubs" color="blue" />
            <Card rank="jack" suit="spades" />
            <Card rank="queen" suit="diamonds" />
          </Hand>
        </Table>
      </GameContext.Provider>
    </main>
  );
}
