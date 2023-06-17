import React, { useMemo, useState } from 'react';
import generateWord from '../../../../utils/generateWord';
import formatString from '../../../../utils/formatString';
import styles from './GameContainer.module.scss';
import ScribbleCanvas from './ScribbleCanvas';
import ScribbleInstructions from './ScribbleInstructios';
import ScribbleScore from './ScribbleScore';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';

export interface Result {
  word: string;
  correct: boolean | null;
}

const GameContainer = () => {
  const [word, setWord] = useState(generateWord({}));
  const [results, setResults] = useState<Result[]>([]);
  const finished = useMemo(() => results.length === 10, [results]);
  const score = useMemo(
    () =>
      results?.reduce((acc, obj) => (obj.correct === true ? acc + 1 : acc), 0),
    [results]
  );
  const submitAnswer = (text: string) => {
    const trimmedString = formatString(text);
    let result: Result;
    if (trimmedString === word) {
      result = { word, correct: true };
    } else {
      result = { word, correct: false };
    }
    console.log({ result });
    setResults([...results, result]);
    setWord(generateWord({}));
  };
  const resetGame = () => {
    setWord(generateWord({}));
    setResults([]);
  };
  return (
    <section className={styles.gameContainer}>
      <span className={styles.word}>{word}</span>
      <ScribbleCanvas
        submitAnswer={submitAnswer}
        finished={finished}
        resetGame={resetGame}
      />
      <ScribbleScore results={results} score={score} />
      {finished && (
        <Modal
          title='GAME OVER'
          description={`You scored: ${score} out of 10`}
          actionText='Play Again'
          cancelText='Close'
          triggerText='OPEN MODAL'
          action={resetGame}
          defaultOpen={true}
        />
      )}
    </section>
  );
};

export default GameContainer;
