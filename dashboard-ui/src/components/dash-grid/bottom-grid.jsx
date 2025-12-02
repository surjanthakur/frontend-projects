import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

import './bottomgrid.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  Legend
)

export default function BottomGrid() {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Sales (Last 12 Months)',
        data: [100, 200, 300, 400, 500, 600, 800, 900, 750, 880, 920, 1100],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        tension: 0.4,
        pointRadius: 3,
        fill: true,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          color: '#666',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
    },
  }

  const barData = {
    labels: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JULY',
      'AUG',
      'SEPT',
      'OCT',
      'NOV',
      'DEC',
    ],
    datasets: [
      {
        label: 'Overall Growth [quater]',
        data: [
          1200, 1900, 3000, 2500, 3435, 3455, 788, 4560, 6005, 2346, 1209, 2350,
        ],
        backgroundColor: '#22c55e',
        borderRadius: 6,
        barThickness: 50,
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: '#666' },
        grid: { drawBorder: false },
      },
      x: {
        ticks: { color: '#666' },
        grid: { display: false },
      },
    },
  }

  return (
    <div className="bottom-grid mt-4">
      {/* box-1 */}
      <div
        className="box box-1 flex flex-col p-5 rounded-xl"
        style={{ gridArea: 'box-1' }}
      >
        <h1 className="text-xl! font-extrabold text-black mb-2">
          Sales Dynamics
        </h1>
        <div className="flex-1">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>

      {/* box-2 */}
      <div
        className="box box-2 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-2' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          <i class="fa-solid fa-wallet"></i>
        </h1>
        <span className="text-gray-500 ml-1">paid invoices</span>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          $ 23,4456
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          1.2%
          <span className="text-gray-500 ml-1">current financial year</span>
        </p>
      </div>
      {/* box-3 */}
      <div
        className="box box-3 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-3' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          <i class="fa-solid fa-wallet"></i>
        </h1>
        <span className="text-gray-500 ml-1">fund received</span>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          $ 28,0983
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          3.2%
          <span className="text-gray-500 ml-1">current financial year</span>
        </p>
      </div>
      {/* box-4 */}
      <div
        className="box box-4 flex flex-col p-5 rounded-xl"
        style={{ gridArea: 'box-4' }}
      >
        <h1 className="text-xl! font-extrabold text-black mb-2">
          Overall Dynamics
        </h1>

        <div className="flex-1">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      {/* box-5 */}
      <div
        className="box box-5 overflow-hidden rounded-xl shadow-md"
        style={{ gridArea: 'box-5' }}
      >
        <img
          src="https://i.pinimg.com/736x/00/38/53/00385325edb5535fb1918a34ec6a4650.jpg"
          alt="Business Visual"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  )
}
