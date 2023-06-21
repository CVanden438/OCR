import ChatroomContainer from '../features/chatroom/components/ChatroomContainer';
import GameContainer from '../features/scribble/components/GameContainer';
import styles from './GamePage.module.scss';

const GamePage = () => {
  return (
    <div className={styles.gamePageLayout}>
      <h2>SCRIBBLE</h2>
      <div className={styles.gameChatWrapper}>
        <GameContainer />
        <ChatroomContainer />
      </div>
      <section className={styles.details}>Details</section>
      <section className={styles.comments}>Comments/Reviews</section>
      <section className={styles.related}>Related Games</section>
    </div>
  );
};

export default GamePage;
