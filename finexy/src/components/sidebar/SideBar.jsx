export default function SideBar() {
  return (
    <div className="flex h-screen w-20 shadow-lg flex-col items-center justify-around bg-white text-black transition-colors duration-300 ">
      {/* THEME TOGGLE */}
      <div className="flex flex-col items-center justify-center py-4">
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-gray-700 transition"></div>
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></span>
        </label>
      </div>

      {/* ROUTES */}
      <div className="flex flex-col items-center gap-8 text-gray-400 text-xl">
        <i className="fa-solid fa-atom hover:scale-110 bg-black text-white rounded-4xl h-8  w-3xl transition"></i>
        <i className="fa-solid fa-bag-shopping hover:scale-110 transition"></i>
        <i className="fa-regular fa-envelope hover:scale-110 transition"></i>
        <i className="fa-solid fa-users-line hover:scale-110 transition"></i>
        <i className="fa-solid fa-layer-group hover:scale-110 transition"></i>
        <i className="fa-solid fa-gear hover:scale-110 transition"></i>
      </div>

      {/* AUTH */}
      <div className="flex flex-col items-center gap-5 pb-6 text-xl">
        <i className="fa-regular fa-circle-question hover:scale-110 transition"></i>
        <i className="fa-solid fa-arrow-right-from-bracket hover:scale-110 transition"></i>
      </div>
    </div>
  )
}
