import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import StatCard from '../components/Dashboard/StatCard';
import styles from './Dashboard.module.css';
import { barData, barOptions, lineData, lineOptions } from '../data/dashboard';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <div className={styles.grid}>
      <div className={styles.row}>
        <StatCard title="Customers" value="3,781" change={11.01} positive />
        <StatCard title="Orders" value="1,219" change={-0.03} positive={false} />
        <StatCard title="Revenue" value="$695" change={15.03} positive />
        <StatCard title="Growth" value="30.1%" change={6.08} positive />
      </div>

      <div className={styles.charts}>
        <Line data={lineData} options={lineOptions} />
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}