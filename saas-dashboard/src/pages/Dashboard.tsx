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
  type ChartOptions // Import ChartOptions from chart.js
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import StatCard from "../components/Dashboard/StatCard";
import { barData } from "../data/dashboard";
import RevenueByLocationMap from "../components/Dashboard/RevenueByLocation";
import TotalSales from "../components/Dashboard/TotalSales";
import styles from "./Dashboard.module.css";

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

const revenueLineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current Week",
      data: [12000000, 7500000, 11000000, 16000000, 19500000, 20000000],
      borderColor: "#000000",
      backgroundColor: "transparent",
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.4,
      borderDash: [0, 0],
    },
    {
      label: "Previous Week",
      data: [7000000, 17000000, 10000000, 9000000, 16000000, 23000000],
      borderColor: "#A1B3C8",
      backgroundColor: "transparent",
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.4,
      borderDash: [0, 0],
    },
  ],
};

const revenueLineOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (context: any) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "rgba(200, 200, 200, 0.3)",

      },
      ticks: {
        callback: function (value: any) {
          if (value >= 1000000) {
            return (value / 1000000).toLocaleString() + "M";
          }
          return value.toLocaleString();
        },
        color: "#555",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#555",
      },
    },
  },
  elements: {
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
};

// Fix the barOptions type issue by explicitly typing it
const barOptionsTyped: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#555",
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.3)",

      },
      ticks: {
        callback: function (value: any) {
          if (value >= 1000000) {
            return (value / 1000000).toLocaleString() + "M";
          }
          return value.toLocaleString();
        },
        color: "#555",
      },
    },
  },
  animation: {
    duration: 1000,
    easing: 'easeOutQuart',
  },
};

export default function Dashboard() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.statCards}>
        <StatCard title="Customers" value="3,781" change={11.01} positive />
        <StatCard
          title="Orders"
          value="1,219"
          change={-0.03}
          positive={false}
        />
        <StatCard title="Revenue" value="$695" change={15.03} positive />
        <StatCard title="Growth" value="30.1%" change={6.08} positive />
      </div>

      {/* Main Charts Grid */}
      <div className={styles.chartsGrid}>
        {/* Revenue Chart with custom legend */}
        <div className={styles.revenueChart}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: 0,
                marginRight: "20px",
              }}
            >
              Revenue
            </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                ></span>
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Current Week
                </span>
                <span style={{ fontSize: "14px", marginLeft: "5px" }}>
                  $58,211
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#A1B3C8",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                ></span>
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Previous Week
                </span>
                <span style={{ fontSize: "14px", marginLeft: "5px" }}>
                  $68,768
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: "300px" }}>
            <Line data={revenueLineData} options={revenueLineOptions} />
          </div>
        </div>
        <div className={styles.projectionsChart}>
          <h3
            style={{
              marginBottom: "16px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#111",
            }}
          >
            Projections vs Actuals
          </h3>
          <Bar data={barData} options={barOptionsTyped} />
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.revenueByLocation}>
            <RevenueByLocationMap width={400} height={200} />
          </div>
            <TotalSales />
        </div>
      </div>
    </div>
  );
}