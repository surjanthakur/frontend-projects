import './App.css'
import RightHeader from './components/RightHeader'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className="main-grid">
        <div className="left-grid">
          <Sidebar />
        </div>
        <div className="right-grid">
          <RightHeader />
        </div>
      </div>
    </>
  )
}

export default App
