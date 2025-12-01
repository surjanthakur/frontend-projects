import './App.css'
import TopGrid from './components/dash-grid/top-grid'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className="main-grid">
        <div className="box-1">
          <Sidebar />
        </div>
        <div className="box-2">
          <TopGrid />
        </div>
      </div>
    </>
  )
}

export default App
