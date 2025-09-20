import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarConfig } from '../../data/sidebar';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';

export default function Sidebar(){
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ByeWind</div>
      <ul className={styles.menu}>
        {sidebarConfig.map((it, i) => (
          <SidebarItem key={i} item={it} />
        ))}
      </ul>
    </nav>
  );
}
