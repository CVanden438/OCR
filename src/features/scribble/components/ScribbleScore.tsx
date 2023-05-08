import React, { useMemo } from 'react';
import styles from './ScribbleScore.module.scss';
import { type Result } from '../Scribble.Page';

interface GameScoreProps {
  results: Result[] | null;
}
const defaultScores = Array.from({ length: 10 }, () => 0);

const ScribbleScore = ({ results }: GameScoreProps) => {
  const score = useMemo(
    () =>
      results?.reduce((acc, obj) => (obj.correct === true ? acc + 1 : acc), 0),
    [results]
  );
  const renderedScores = useMemo(
    () =>
      results
        ?.slice(0, 10)
        //@ts-ignore
        .concat(defaultScores.slice(results?.length)),
    [results]
  );
  console.log(renderedScores);
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
