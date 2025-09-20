
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import styles from './Layout.module.css';
import RightPanelStub from './RightPanelStub';

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
