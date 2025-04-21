import Row from "./Row";
import { useState } from "react";
import { motion } from "motion/react";

export default function Wordle() {
  const words = [
    "apple",
    "mango",
    "grape",
    "lemon",
    "peach",
    "blunt",
    "berry",
    "plumb",
    "pearl",
    "vivid",
    "fence",
    "swoop",
    "flame",
    "glove",
    "dance",
    "trust",
    "piano",
    "scout",
    "beach",
    "brick",
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  const correctWord = "BLUNT";
  const [attempt, setAttempts] = useState(new Array(6).fill(null));
  const [currentRow, setRow] = useState(0);
  const [endGame, setGame] = useState(false);

  return (
    <>
      <section className="flex flex-col gap-2">
        {attempt.map((rowAttempt, i) => {
          return (
            <Row
              key={i}
              isActive={i == currentRow}
              attempt={rowAttempt}
              setAttempts={setAttempts}
              rowIndex={i}
              setRow={setRow}
              correctWord={correctWord}
              endGame={endGame}
              setGame={setGame}
            />
          );
        })}
      </section>
    </>
  );
}
