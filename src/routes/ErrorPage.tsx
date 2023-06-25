import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main>
      <h2>Oops! This page was not found!</h2>
      <Link to='/home'>Click here to go home</Link>
    </main>
  );
};

export default ErrorPage;
