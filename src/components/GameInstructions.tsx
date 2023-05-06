import React from 'react';
import styles from './GameInstructions.module.scss';
import Button from './ui/Button';

interface GameInstructionsProps {
  setInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameInstructions = ({ setInstructions }: GameInstructionsProps) => {
  return (
    <div className={styles.instructionsContainer}>
      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <p>
          Draw the word from the top of the screen as accurately as possible,
          then click submit when you are done. You will get 10 words and given a
          score out of 10 at the end.
        </p>
        <Button onClick={() => setInstructions(false)}>Got it!</Button>
      </div>
    </div>
  );
};

export default GameInstructions;
