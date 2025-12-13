import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function IncomeBarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [12000, 19000, 15000, 22000, 18000, 26000],
        backgroundColor: '#FF6E28', // indigo, classy finance color
        borderRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `₹${value}`,
        },
        grid: {
          color: '#e5e7eb',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-100">
      <Bar data={data} options={options} />
    </div>
  )
}
