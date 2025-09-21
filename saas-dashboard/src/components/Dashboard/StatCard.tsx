import React from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import styles from "./StatCard.module.css";

const StatCard: React.FC<{
  title: string;
  value: string | number;
  change?: number;
  positive?: boolean;
}> = ({ title, value, change, positive }) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
    <div className={styles.valueContainer}>
      <div className={styles.value}>{value}</div>
      {change !== undefined && (
        <div className={styles.change} data-positive={positive}>
          {positive ? `+${change}%` : `${change}%`}
        </div>
      )}
      {positive ? (
        <TrendingUpOutlinedIcon
          className={styles.icon}
          style={{ color: "green" }}
        />
      ) : (
        <TrendingDownOutlinedIcon
          className={styles.icon}
          style={{ color: "red" }}
        />
      )}
    </div>
  </div>
);

export default StatCard;