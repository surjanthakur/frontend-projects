import { motion, useScroll } from 'motion/react'
import './topbar.css'
export default function Topbar() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <nav className="w-full h-16 sticky top-0 z-10 bg-white flex items-center justify-between p-4 shadow-lg! rounded-lg!">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl! font-extralight! text-gray-800">
            Analytics
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded-md">
            <span className="text-gray-500!">16.09.2025 - 20.09.2025</span>
            <i className="fa-regular fa-calendar text-gray-400"></i>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <label className="switch">
              <input type="checkbox" class="checkbox" />
              <div className="slider"></div>
            </label>
          </div>

          {/* USER */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover"
            />

            <span className="text-sm font-medium text-gray-700">Kristi</span>
          </div>
        </div>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full h-2 bg-yellow-400 origin-bottom-left rounded-2xl sticky top-0 left-0  z-10 mt-1 "
      ></motion.div>
    </>
  )
}
