import randomWords from 'random-words';
import { useMemo, useState } from 'react';
import Canvas from './components/game/ScribbleCanvas';
import styles from './Scribble.module.scss';
import SctibbleScore from './components/game/ScribbleScore';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import GameContainer from './components/game/GameContainer';
import ChatroomContainer from './components/chatroom/ChatroomContainer';

const ScribblePage = () => {
  return (
    <div className={styles.gamePageLayout}>
      <h2>SCRIBBLE</h2>
      <div className={styles.gameChatWrapper}>
        <GameContainer />
        <ChatroomContainer />
      </div>
      <section className={styles.chatroom}>Chatroom</section>
      <section className={styles.details}>Details</section>
      <section className={styles.comments}>Comments/Reviews</section>
      <section className={styles.related}>Related Games</section>
    </div>
  );
};

export default ScribblePage;
