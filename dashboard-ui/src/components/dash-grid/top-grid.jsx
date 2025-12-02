import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { motion } from 'motion/react'
import { Doughnut } from 'react-chartjs-2'
import './topgrid.css'

ChartJS.register(ArcElement, Tooltip, Legend)

// common animation for all boxes
const motionStyle = {
  whileHover: { y: -10, backgroundColor: '#b79248', color: 'white' },
  transition: { ease: 'backInOut' },
}

export default function TopGrid() {
  const doughnutData = {
    labels: ['New', 'Returning', 'Inactive'],
    datasets: [
      {
        data: [2300, 1200, 105],
        backgroundColor: ['#6366f1', '#22c55e', '#f59e0b'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  }

  const Datasubs = {
    labels: ['paid', 'trial'],
    datasets: [
      {
        data: [2000, 1000],
        backgroundColor: ['#6366f1', '#22c55e'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  }

  const doughnutOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 10, color: '#333' },
      },
    },
    maintainAspectRatio: false,
  }

  return (
    <div className="top-grid mt-4">
      {/* box-1 */}
      <motion.div
        {...motionStyle}
        className="box box-1 p-4 rounded-xl"
        style={{ gridArea: 'box-1' }}
      >
        <h1 className="text-2xl! font-light! text-black flex justify-between">
          Orders <i className="fa-solid fa-address-card" />
        </h1>
        <h1 className="text-3xl! font-extrabold! my-2">201</h1>
        <p className="text-green-500 text-sm!">
          ▲ 8.2% <span className="text-gray-400">last month</span>
        </p>
      </motion.div>

      {/* box-2 */}
      <motion.div
        {...motionStyle}
        className="box box-2 p-4 rounded-xl"
        style={{ gridArea: 'box-2' }}
      >
        <h1 className="text-2xl! font-light! text-black flex justify-between">
          Approved <i className="fa-solid fa-arrow-trend-up" />
        </h1>
        <h1 className="text-3xl! font-extrabold! my-2">50</h1>
        <p className="text-green-500 text-sm!">
          ▲ 3.2% <span className="text-gray-400">last month</span>
        </p>
      </motion.div>

      {/* box-3 USERS */}
      <motion.div
        {...motionStyle}
        className="box box-3 p-4 rounded-xl"
        style={{ gridArea: 'box-3' }}
      >
        <h1 className="text-2xl! font-light! text-black flex justify-between">
          Users <i className="fa-solid fa-users" />
        </h1>
        <h1 className="text-3xl! font-extrabold! text-red-500 text-center! my-1">
          4,390
        </h1>

        <div className="flex justify-center mt-2">
          <div style={{ width: '160px', height: '160px' }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </motion.div>

      {/* box-4 SUBSCRIPTIONS */}
      <motion.div
        {...motionStyle}
        className="box box-4 p-4 rounded-xl"
        style={{ gridArea: 'box-4' }}
      >
        <h1 className="text-2xl! font-light text-black">Subscriptions</h1>
        <h1 className="text-3xl! font-extrabold! text-red-500 text-center my-2!">
          3,000
        </h1>

        <div className="flex justify-center">
          <div style={{ width: '160px', height: '160px' }}>
            <Doughnut data={Datasubs} options={doughnutOptions} />
          </div>
        </div>
      </motion.div>

      {/* box-5 TOTAL */}
      <motion.div
        {...motionStyle}
        className="box box-5 p-4 rounded-xl"
        style={{ gridArea: 'box-5' }}
      >
        <h1 className="text-2xl! font-light! text-black">Total</h1>
        <h1 className="text-3xl! font-extrabold! my-2">$25,401</h1>
        <p className="text-green-500 text-sm!">
          ▲ 3.2% <span className="text-gray-400">last month</span>
        </p>
      </motion.div>

      {/* box-6 REVENUE */}
      <motion.div
        {...motionStyle}
        className="box box-6 p-5 rounded-xl!"
        style={{ gridArea: 'box-6' }}
      >
        <h1 className="text-2xl! font-light text-black">Revenue</h1>
        <h1 className="text-3xl! font-extrabold! my-2">$12,000</h1>
        <p className="text-red-500 text-sm">
          🔻 3.2% <span className="text-gray-400">last month</span>
        </p>
      </motion.div>
    </div>
  )
}
