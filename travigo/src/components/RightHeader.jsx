export default function RightHeader() {
  return (
    <>
      <nav className="sticky top-0 z-20 flex align-middle  justify-between w-full h-25 rounded-lg shadow-lg! bg-white p-2!">
        <div className="flex flex-col mt-2! p-3!  ">
          <h1 className="text-2xl! font-bold text-start text-black">
            hello Jerry! 👋🏻
          </h1>
          <p className="text-sm! font-extralight! text-start text-gray-400">
            welcome back and explore the world.
          </p>
        </div>
        {/* search bar */}
        <div className=" mt-3! w-100 flex">
          <input
            type="text"
            placeholder="Search Destination"
            className="w-full h-14 pl-10 pr-4 rounded-4xl  shadow-md text-center"
          />
          <button className="w-30 h-14 bg-[#1cc889] rounded-4xl ms-2!">
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
          <h1 className="text-lg! font-extralight text-gray-600">
            @Jerry Traveller
          </h1>
        </div>
      </nav>
    </>
  )
}
