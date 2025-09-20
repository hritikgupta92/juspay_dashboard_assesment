import React from 'react';
import styles from './StatCard.module.css';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

const StatCard: React.FC<{ title: string; value: string | number; change?: number; positive?: boolean }> = ({ title, value, change, positive }) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
    <div className={styles.valueContainer}>
    <div className={styles.value}>{value}</div>
    {change !== undefined && (
      <div className={styles.change} data-positive={positive}>
        {positive ? `+${change}%` : `${change}%`}
      </div>
    )}
    {positive? <TrendingUpOutlinedIcon className={styles.icon} />:<TrendingDownOutlinedIcon className={styles.icon} />}
    </div>
  </div>
);

export default StatCard;