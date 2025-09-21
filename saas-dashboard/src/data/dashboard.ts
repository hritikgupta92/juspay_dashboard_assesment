export const actuals = [16, 20, 18, 22, 14, 20];   // Dark part (bottom)
export const projections = [4, 5, 3, 4, 2, 4];     // Light part (top)

export const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Actuals",
      data: actuals,
      
      backgroundColor: "#A8C5DA", // Darker Cyan
      stack: "stack1",
      barThickness: 20,
      borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 8, bottomRight: 8 },
    },
    {
      label: "Projections",
      data: projections,
      backgroundColor: "#CFDFEB", // Lighter Cyan
      stack: "stack1",
      barThickness: 20,
      borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 0, bottomRight: 0 },
    },
  ],
};

export const barOptions = {
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.dataset.label}: ${context.raw}M`,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
      ticks: { font: { size: 12 } },
    },
    y: {
      stacked: true,
      min: 0,
      max: 30,
      ticks: {
        stepSize: 10,
        callback: (val: number) => `${val}M`,
      },
      grid: { color: "#A8C5DA" },
    },
  },
};
export const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week',
        data: [12000000, 7500000, 11000000, 16000000, 19500000, 20000000],
        borderColor: '#000000', // Solid black line
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        borderDash: [0, 0], // Solid line
      },
      {
        label: 'Previous Week',
        data: [7000000, 17000000, 10000000, 9000000, 16000000, 23000000],
        borderColor: '#A1B3C8', // Light blue line
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        borderDash: [0, 0], // Solid line
      },
    ],
  };

  export const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.3)',
          drawBorder: false,
        },
        ticks: {
          callback: function(value:any) {
            if (value >= 1000000) {
              return (value / 1000000).toLocaleString() + 'M';
            }
            return value.toLocaleString();
          },
          color: '#555',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
        },
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
  };
