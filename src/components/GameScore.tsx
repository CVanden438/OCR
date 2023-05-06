import React from 'react';
import styles from './GameScore.module.scss';
import { type Result } from '../pages/Game';

interface GameScoreProps {
  results: Result[] | null;
}

const GameScore = ({ results }: GameScoreProps) => {
  return (
    <div className={styles.score}>
      <h3>Results</h3>
      {results &&
        results.map((result, ind) => {
          return (
            <div
              key={ind}
              className={result.correct ? styles.correct : styles.wrong}
            >
              {result.word}
            </div>
          );
        })}
    </div>
  );
};

export default GameScore;
