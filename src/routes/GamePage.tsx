import { useNavigate, useParams } from 'react-router-dom';
import ChatroomContainer from '../features/chatroom/components/ChatroomContainer';
import ScribbleGameContainer from '../features/scribble/components/ScribbleGameContainer';
import styles from './GamePage.module.scss';
import DetailsContainer from '../features/details/components/DetailsContainer';
import data from '../data';
import { useEffect } from 'react';

const games = {
  scribble: <ScribbleGameContainer />,
  wordfall: <ScribbleGameContainer />,
};

const GamePage = () => {
  const { gameName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!gameName || !Object.keys(data).includes(gameName)) {
      navigate('/home');
    }
  }, [gameName, navigate]);

  return gameName ? (
    <div className={styles.gamePageLayout}>
      <h2>{data[gameName]?.name}</h2>
      <div className={styles.gameChatWrapper}>
        {/* <ScribbleGameContainer /> */}
        {games[gameName]}
        <ChatroomContainer />
      </div>
      <DetailsContainer gameName={gameName} />
      <section className={styles.comments}>Comments/Reviews</section>
      <section className={styles.related}>Related Games</section>
    </div>
  ) : null;
};

export default GamePage;
