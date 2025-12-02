export default function Topbar() {
  return (
    <nav className="w-full h-16 sticky top-0 z-10 bg-white flex items-center justify-between p-4 shadow-lg! rounded-lg!">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold  text-gray-800">Analytics</h1>

        <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded-md">
          <span>16.09.2025 - 20.09.2025</span>
          <i className="fa-regular fa-calendar text-gray-400"></i>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow text-yellow-400">
            <i className="fa-solid fa-sun text-xs"></i>
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-black">
            <i className="fa-solid fa-moon text-xs"></i>
          </button>
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
  )
}
