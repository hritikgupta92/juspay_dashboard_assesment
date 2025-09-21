
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import RightPanelStub from './RightPanelStub';
import styles from './Layout.module.css';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}><Sidebar/></aside>
      <div className={styles.main}>
        <header className={styles.topbar}><Topbar/></header>
        <main className={styles.content}>{children}</main>
      </div>
      <aside className={styles.right}><RightPanelStub/></aside>
    </div>
  );
};

export default Layout;
