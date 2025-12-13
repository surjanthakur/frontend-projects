import './App.css'
import { useState, useEffect } from 'react'
import { SideBar, Navbar, TopSection } from './components/index'
import { RandomUserProvider } from './context/user.js'
function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random'
    const options = { method: 'GET', headers: { accept: 'application/json' } }

    const getRandomUser = async () => {
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setUser(data.data)
        console.log(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getRandomUser()
  }, [setUser])
  return (
    <>
      <RandomUserProvider value={{ user, setUser }}>
        <Navbar />
        <div className="main-grid">
          <div>
            <SideBar />
          </div>
          <div>
            <TopSection />
          </div>
        </div>
      </RandomUserProvider>
    </>
  )
}

export default App
