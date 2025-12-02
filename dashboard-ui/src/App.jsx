import './App.css'
import BottomGrid from './components/dash-grid/bottom-grid'
import TopGrid from './components/dash-grid/top-grid'
import Topbar from './components/dash-grid/topbar'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  return (
    <>
      <div className="main-grid">
        <div className="box-1">
          <Sidebar />
        </div>
        <div className="box-2 p-4">
          <Topbar />
          <TopGrid />
          <BottomGrid />
        </div>
      </div>
    </>
  )
}

export default App
