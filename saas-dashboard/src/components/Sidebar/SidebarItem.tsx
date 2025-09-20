import React, { useState } from 'react';
import type { MenuItem } from '../../data/sidebar';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const SidebarItem: React.FC<{item: MenuItem}> = ({item}) => {
  const [open, setOpen] = useState(false);
  if(!item.children) {
    return (
      <li className={styles.item}>
        <NavLink to={item.path || '#'} className={({isActive}:any) => isActive ? styles.active : ''}>
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      </li>
    );
  }

  return (
    <li className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.parent} onClick={() => setOpen(v => !v)}>
        <span>{item.label}</span>
        <span className={styles.arrow}>{open ? '▾' : '▸'}</span>
      </button>
      <ul className={styles.submenu}>
        {item.children.map((c,i) => (
          <li key={i}><NavLink to={c.path || '#'} className={({isActive}:any) => isActive ? styles.active : ''}>{c.label}</NavLink></li>
        ))}
      </ul>
    </li>
  );
};

export default SidebarItem;
