import { useRef, useEffect, useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';
import styles from './Topbar.module.css';

import SunnyIcon from '@mui/icons-material/WbSunny';

export default function Topbar() {
  const { theme, toggle } = useThemeStore();  
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState('Search');
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const pageName = pathParts[0] || "dashboard";

  useEffect(() => {
    const isMac = window.navigator.platform.toUpperCase().includes('MAC');
    setPlaceholder(`Search (${isMac ? 'Cmd+/' : 'Ctrl+/'})`);

    const onKey = (e:any) => {
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        //@ts-expect-error focus
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <button className={styles.icon} aria-label="Menu">
          <MenuIcon />
        </button>
        <div className={styles.breadcrumb}>
          Dashboards / <strong>{pageName === "dashboard" ? "Default" : pageName}</strong>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.searchContainer}>
          <SearchOutlinedIcon className={styles.searchIcon} />
          <input
            ref={inputRef}
            className={styles.search}
            placeholder={placeholder}
          />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.icon} aria-label="Refresh">
          <RefreshIcon />
        </button>
        <button
          className={styles.icon}
          onClick={toggle}  
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunnyIcon /> : <DarkModeIcon />}
        </button>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            fontSize: 14,
            background: 'var(--primary, #007bff)',
          }}
        >
          RG
        </Avatar>
      </div>
    </div>
  );
}