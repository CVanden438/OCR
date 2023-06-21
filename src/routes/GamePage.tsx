import { useParams } from 'react-router-dom';
import ChatroomContainer from '../features/chatroom/components/ChatroomContainer';
import GameContainer from '../features/scribble/components/GameContainer';
import styles from './GamePage.module.scss';
import DetailsContainer from '../features/details/components/DetailsContainer';

const GamePage = () => {
  const { gameName } = useParams();
  if (!gameName) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.gamePageLayout}>
      <h2>{gameName?.toUpperCase()}</h2>
      <div className={styles.gameChatWrapper}>
        <GameContainer />
        <ChatroomContainer />
      </div>
      <DetailsContainer gameName={gameName} />
      <section className={styles.comments}>Comments/Reviews</section>
      <section className={styles.related}>Related Games</section>
    </div>
  );
};

export default GamePage;
