import Block from "./Block";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function Row({
  isActive,
  attempt,
  setAttempts,
  rowIndex,
  setRow,
  correctWord,
  endGame,
  setGame,
}) {
  const [blockColor, setBlockColor] = useState(new Array(5).fill(""));

  useEffect(() => {
    if (!isActive || endGame) return;

    const handleType = (e) => {
      const key = e.key;
      const letter = key.toUpperCase();

      if (key === "Enter") {
        setAttempts((prev) => {
          const updated = [...prev];
          const row = [...(updated[rowIndex] ?? new Array(5).fill(""))];
          const isComplete = row.every((char) => char !== "");
          if (isComplete) {
            // Logic to check if the word matches or not

            const wordComplete = row.join("");
            const completeMatch = wordComplete === correctWord.toUpperCase();

            if (completeMatch) {
              setBlockColor(() => {
                const updated = new Array(5).fill("green");
                return updated;
              });

              setGame(() => true);
            } else {
              if (!completeMatch) {
                const newColors = [];

                for (let i = 0; i < correctWord.length; i++) {
                  if (wordComplete[i] === correctWord[i]) {
                    newColors.push("green");
                  } else if (correctWord.includes(wordComplete[i])) {
                    newColors.push("yellow");
                  } else {
                    newColors.push("black");
                  }
                }

                setBlockColor(() => newColors);
              }
            }
          }
          return updated;
        });

        setRow((prevRow) => prevRow + 1);

        return; // skip further processing
      }

      setAttempts((prev) => {
        const updated = [...prev];
        const row = [...(updated[rowIndex] ?? new Array(5).fill(""))];

        const currentIndex = row.findIndex((char) => char === ""); // ← Real-time index

        if (/^[A-Z]$/.test(letter) && currentIndex !== -1) {
          row[currentIndex] = letter;
          updated[rowIndex] = row;
        }

        if (key === "Backspace") {
          const lastFilledIndex = row.findLastIndex((char) => char !== "");
          if (lastFilledIndex !== -1) {
            row[lastFilledIndex] = "";
            updated[rowIndex] = row;
          }
        }

        return updated;
      });
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [isActive, rowIndex, setAttempts, setRow]);

  const lettersToRender = attempt || new Array(5).fill("");

  return (
    <motion.div className="flex flex-row gap-2">
      {lettersToRender.map((letter, i) => (
        <Block key={i} letter={letter} blockColor={blockColor[i]} />
      ))}
    </motion.div>
  );
}
