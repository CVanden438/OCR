import styles from './DetailsContainer.module.scss';

interface DetailsContainerProps {
  gameName: string;
}

const DetailsContainer = ({ gameName }: DetailsContainerProps) => {
  return (
    <div>
      <h3>{gameName}</h3>
    </div>
  );
};

export default DetailsContainer;
