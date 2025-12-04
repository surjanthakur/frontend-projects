import './App.css'
import RightBottomSection from './components/RightBottomSection'
import RightHeader from './components/RightHeader'
import RightTopSection from './components/RightTopSection'
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
          <RightTopSection />
          <RightBottomSection />
        </div>
      </div>
    </>
  )
}

export default App
