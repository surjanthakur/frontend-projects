import './App.css'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className="main-grid">
        <div className="box-1">
          <Sidebar />
        </div>
        <div className="box-2">this is grid for dashboard</div>
      </div>
    </>
  )
}

export default App
