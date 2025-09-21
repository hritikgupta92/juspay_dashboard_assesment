
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './TotalSales.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalSales = () => {
  const salesData = [300.56, 135.18, 154.02, 48.96];
  const labels = ["Direct", "Affiliate", "Sponsored", "E-mail"];

  const segmentColors = [
    '#000000',  // Black
    '#9EE198',  // Light Green
    '#8FAEF1',  // Light Blue
    '#B4D3F9',  // Lighter Blue
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: salesData,
        backgroundColor: segmentColors,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 8,
        spacing: 5,
      },
    ],
  };

  const options = {
    cutout: "75%",  
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context:any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
    hoverOffset: 4,
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Total Sales</h2>
      <div className={styles.chartAndLegend}>
        <div className={styles.chartWrapper}>
          <Doughnut data={data} options={options} />
        </div>
        <ul className={styles.legendList}>
          {labels.map((label, index) => (
            <li key={label} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ backgroundColor: segmentColors[index] }}></span>
              <span className={styles.labelText}>{label}:</span>
              <span className={styles.legendValue}>${salesData[index].toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TotalSales;