import { useTheme } from '../context/themeContextapi'
import '../css/header.css'

export default function RightHeader() {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  // set theme
  const handelChangeTheme = (e) => {
    const darkStatus = e.currentTarget.checked
    if (darkStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }
  return (
    <>
      <nav className=" sticky top-0 z-20 flex align-middle  justify-between w-full h-25  shadow-lg! bg-white p-2!  dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col p-2!  ">
          {/* theme change switch */}
          <label className="switch">
            <input
              type="checkbox"
              value=""
              onChange={handelChangeTheme}
              checked={themeMode === 'dark'}
            />
            <span className="slider"></span>
          </label>
          <h1 className="text-2xl! font-bold text-start text-black dark:text-white">
            hello Jerry! 👋🏻
          </h1>
          <p className="text-sm! font-extralight! text-start text-gray-400 dark:text-white">
            welcome back and explore the world.
          </p>
        </div>
        {/* search bar */}
        <div className=" mt-3! w-100 flex">
          <input
            type="text"
            placeholder="Search Destination"
            className="w-full h-14 pl-10 pr-4 rounded-4xl  shadow-md text-center dark:text-white"
          />
          <button className="w-33 h-12 bg-[#1cc889] rounded-4xl ms-2! dark:text-white">
            search
          </button>
        </div>

        <div className="flex mt-6! p-2!">
          <i className="fa-solid fa-bell  text-red-500"></i>
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover mr-2!"
          ></img>
          <h1 className="text-lg! font-extralight text-gray-600 dark:text-white">
            @Jerry Traveller
          </h1>
        </div>
      </nav>
    </>
  )
}
