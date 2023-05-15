import React, { useMemo } from 'react';
import styles from './ScribbleScore.module.scss';
import { type Result } from '../Scribble.Page';

interface GameScoreProps {
  results: Result[] | null;
  score: number;
}
const defaultScores = Array.from({ length: 10 }, () => ({
  word: '',
  correct: null,
}));

const ScribbleScore = ({ results, score }: GameScoreProps) => {
  const renderedScores = useMemo(
    () => results?.concat(defaultScores.slice(results?.length)),
    [results]
  );
  return (
    <div className={styles.score}>
      <h3>Results</h3>
      {renderedScores &&
        renderedScores.map((result, ind) => {
          return (
            <div
              key={ind}
              className={`${styles.result} ${
                result.correct && styles.correct
              } ${result.correct === false && styles.wrong}`}
            >
              <span>{ind + 1}:</span>
              {result.word}
            </div>
          );
        })}
      <span className={styles.count}>Score: {score}/10</span>
    </div>
  );
};

export default ScribbleScore;
