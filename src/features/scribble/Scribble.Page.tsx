import randomWords from 'random-words';
import { useMemo, useState } from 'react';
import Canvas from './components/ScribbleCanvas';
import styles from './Scribble.module.scss';
import SctibbleScore from './components/ScribbleScore';
import Modal from '../../components/ui/Modal';

export interface Result {
  word: string;
  correct: boolean;
}

const formatString = (string: String) => {
  const trimmedString = string.trim().replace(/\s/g, '').toUpperCase();
  return trimmedString;
};

const generateWord = () => {
  const word = randomWords({
    exactly: 1,
    maxLength: 5,
    formatter: (word) => word.toUpperCase(),
  });
  return word[0];
};
// const initialResults: Result[] = Array.from({ length: 10 });
const ScribblePage = () => {
  const [word, setWord] = useState(generateWord());
  const [results, setResults] = useState<Result[]>([]);
  const finished = useMemo(() => results.length === 10, [results]);
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
    setWord(generateWord());
  };
  const resetGame = () => {
    setWord(generateWord());
    setResults([]);
  };
  return (
    <main className={styles.game}>
      <span className={styles.word}>{word}</span>
      <div className={styles.gameContainer}>
        <Canvas submitAnswer={submitAnswer} />
        <SctibbleScore results={results} />
      </div>
      {finished && <p>FINISHED</p>}
      {finished && (
        <Modal
          title='GAME OVER'
          description={`You scored: 10 out of 10`}
          actionText='Play Again'
          cancelText='Close'
          triggerText='OPEN MODAL'
          action={resetGame}
          defaultOpen={true}
        />
      )}
    </main>
  );
};

export default ScribblePage;
