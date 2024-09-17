import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ['', '', '', '', '', '', ''], // Empty labels for a minimal look
    datasets: [
      {
        label: 'Line Chart',
        data: [2, 3, 1.5, 3.2, 2.8, 4.5, 3.9], // Example data points
        fill: true,
        borderColor: '#007bff', // Line color (blue)
        backgroundColor: 'rgba(0, 223, 255, 0.1)', // Light blue fill below the line
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide the X-axis
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points
      },
    },
  };

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
