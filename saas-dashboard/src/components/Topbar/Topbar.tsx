import { useRef, useEffect } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import styles from './Topbar.module.css';

export default function Topbar() {
  const toggle = useThemeStore(s => s.toggle);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const onKey = (e:any) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
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
        <div className={styles.breadcrumb}>Dashboards / <strong>Default</strong></div>
      </div>

      <div className={styles.center}>
        <input ref={inputRef} className={styles.search} placeholder="Search (Ctrl+K)" />
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
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
        <Avatar sx={{ width: 32, height: 32, fontSize: 14, background: 'var(--primary, #007bff)' }}>RG</Avatar>
      </div>
    </div>
  );
}
