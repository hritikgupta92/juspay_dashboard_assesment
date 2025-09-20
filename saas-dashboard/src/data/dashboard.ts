export const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projections",
      data: [13, 22, 20, 27, 19, 23],
      backgroundColor: "#cde2fa",
    },
    {
      label: "Actuals",
      data: [11, 19, 18, 24, 17, 21],
      backgroundColor: "#7ab7f7",
    },
  ],
};

export const barOptions = {
  scales: {
    y: { min: 0, max: 30, grid: { color: "#eef1fa" } },
    x: { grid: { display: false } },
  },
  plugins: {
    legend: { position: "top" },
  },
};

export const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current Week",
      data: [7, 11, 14, 18, 22, 24],
      borderColor: "#23272a",
      borderWidth: 3,
      fill: false,
      borderDash: [],
      pointBackgroundColor: "#23272a",
    },
    {
      label: "Previous Week",
      data: [12, 10, 18, 17, 21, 28],
      borderColor: "#9dc6ec",
      borderWidth: 3,
      fill: false,
      borderDash: [4, 4],
      pointBackgroundColor: "#9dc6ec",
    },
  ],
};

  export const lineOptions = {
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: '#e0e0e0',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top', // Valid value
      },
    },
  };

