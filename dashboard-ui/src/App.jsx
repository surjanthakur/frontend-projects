import './App.css'
import Topbar from './components/dash-grid/topbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className="main-grid">
        <div className="box-1">
          <Sidebar />
        </div>
        <div className="box-2">
          <Topbar />
        </div>
      </div>
    </>
  )
}

export default App
