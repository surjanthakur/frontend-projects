import { useEffect, useState } from 'react'
import './App.css'
import RightBottomSection from './components/RightBottomSection'
import RightHeader from './components/RightHeader'
import RightTopSection from './components/RightTopSection'
import Sidebar from './components/Sidebar'
import { ThemeProvider } from './context/themeContextapi'

export default function App() {
  const [themeMode, setThemeMode] = useState('light')

  // set light mode
  const lightTheme = () => {
    setThemeMode('light')
    localStorage.setItem('themeMode', 'light')
  }

  // set dark mode
  const darkTheme = () => {
    setThemeMode('dark')
    localStorage.setItem('themeMode', 'dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
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
      </ThemeProvider>
    </>
  )
}
