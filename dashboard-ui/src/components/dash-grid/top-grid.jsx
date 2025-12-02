import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import './topgrid.css'
ChartJS.register(ArcElement, Tooltip, Legend)

export default function TopGrid() {
  const doughnutData = {
    labels: ['New', 'Returning', 'Inactive'],
    datasets: [
      {
        data: [2300, 1200, 105],
        backgroundColor: ['#6366f1', '#22c55e', '#f59e0b'],
        borderWidth: 0,
        cutout: '70%', // donut slim & classy
      },
    ],
  }

  const Datasubs = {
    labels: ['paid', 'trail'],
    datasets: [
      {
        data: [2000, 1000],
        backgroundColor: ['#6366f1', '#22c55e'],
        borderWidth: 0,
        cutout: '70%', // donut slim & classy
      },
    ],
  }

  const doughnutOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          color: '#333',
        },
      },
    },
    maintainAspectRatio: false,
  }

  return (
    <div className="top-grid mt-4">
      {/* box-1 */}
      <div
        className="box box-1 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-1' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          Orders
          <i className="fa-solid fa-address-card  ml-25"></i>
        </h1>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          201
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          8.2%
          <span className="text-gray-500 ml-1">last month</span>
        </p>
      </div>
      {/* box 2 */}
      <div
        className="box box-2 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-2' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          Approved
          <i class="fa-solid fa-arrow-trend-up ml-25"></i>
        </h1>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          50
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          3.2%
          <span className="text-gray-500 ml-1">last month</span>
        </p>
      </div>

      {/* box -3 */}
      <div
        className="box box-3 flex flex-col p-5 rounded-xl"
        style={{ gridArea: 'box-3' }}
      >
        <h1 className="text-2xl! font-extrabold! flex items-center gap-2 text-black">
          Users <i className="fa-solid fa-users ml-auto"></i>
        </h1>

        <h1 className="text-3xl! font-extrabold! text-gray-900 text-center my-2">
          4,390
        </h1>

        {/* Doughnut Chart */}
        <div className="flex-1 flex justify-center items-center">
          <div style={{ width: '200px', height: '200px' }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* box-4 */}
      <div
        className="box box-4 flex flex-col p-5 rounded-xl"
        style={{ gridArea: 'box-4' }}
      >
        <h1 className="text-2xl! font-extrabold! flex items-center gap-2 text-black">
          subscriptions <i class="fa-solid fa-indian-rupee-sign ml-auto"></i>
        </h1>

        <h1 className="text-3xl! font-extrabold! text-gray-900 text-center my-5">
          3,000
        </h1>

        {/* Doughnut Chart */}
        <div className="flex-1 flex justify-center items-center">
          <div style={{ width: '200px', height: '200px' }}>
            <Doughnut data={Datasubs} options={doughnutOptions} />
          </div>
        </div>
      </div>
      {/* box-5 */}
      <div
        className="box box-5 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-5' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          Total
          <i class="fa-solid fa-dollar-sign ml-20"></i>
        </h1>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          25,401
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          3.2%
          <span className="text-gray-500 ml-1">last month</span>
        </p>
      </div>
      {/* box-6 */}
      <div
        className="box box-6 flex flex-col justify-between p-5 rounded-xl"
        style={{ gridArea: 'box-6' }}
      >
        <h1 className="text-4xl!  font-extrabold! flex items-center gap-2 text-black">
          revenue
          <i className="fa-solid fa-address-card  ml-25"></i>
        </h1>
        <h1 className="text-4xl! font-extrabold! text-gray-900 text-start my-4">
          12,000
        </h1>
        <p className="text-green-500 text-lg! flex items-center gap-1">
          <i className="fa-solid fa-arrow-up"></i>
          3.2%
          <span className="text-gray-500 ml-1">last month</span>
        </p>
      </div>
    </div>
  )
}
