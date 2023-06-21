import MainHeader from '../ui/MainHeader';
import { Outlet } from 'react-router-dom';
import MainSidebar from '../ui/MainSidebar';
import styles from './Root.module.scss';

const Root = () => {
  return (
    <>
      <MainHeader />
      <main className={styles.root}>
        <MainSidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
