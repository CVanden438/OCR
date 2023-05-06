import randomWords from 'random-words';
import { useState } from 'react';
import Canvas from '../components/Canvas';
import styles from './Game.module.scss';
import GameScore from '../components/GameScore';

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
const Game = () => {
  const [word, setWord] = useState(generateWord());
  const [result, setResult] = useState<null | boolean>(null);
  const [results, setResults] = useState<Result[]>([]);
  const getWord = () => {
    const generatedWord = generateWord();
    setWord(generatedWord);
  };
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
  return (
    <main className={styles.game}>
      <span className={styles.word}>{word}</span>
      {/* <button onClick={getWord}>Generate Word</button> */}
      <div className={styles.gameContainer}>
        <Canvas submitAnswer={submitAnswer} />
        <GameScore results={results} />
      </div>
      {result === true && <p>YOU ARE CORRECT</p>}
      {result === false && <p>YOU ARE WRONG</p>}
    </main>
  );
};

export default Game;
