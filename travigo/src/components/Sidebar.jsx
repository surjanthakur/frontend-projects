import { useState } from 'react'
import '../css/sidebar.css'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/* Toggle Button - Visible on mobile/tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50  bg-[#1cc889] lg:hidden text-white p-3! rounded-4xl shadow-lg hover:bg-[#17a670] transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <i className="fa-solid fa-times text-xl"></i>
        ) : (
          <i className="fa-solid fa-bars text-xl"></i>
        )}
      </button>

      {/* Overlay - Visible when sidebar is open on mobile/tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={` shadow-lg dark:bg-gray-800 dark:text-white bg-white 
          fixed lg:static
          top-0 left-0 h-screen w-74 z-40
          transition-transform 
          duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <h1 className="+ text-3xl font-bold mt-10! text-center p-1">
          Travigo&nbsp;
          <i className="text-[#1cc889] fa-solid fa-plane-departure"></i>
        </h1>
        <div className="routes flex flex-col! mt-20! gap-5 text-1xl!">
          <button className="dashboard">
            <i className=" fa-regular fa-house"></i>&nbsp;Dashboard
          </button>
          <button className="hover:underline h-16 rounded-3xl ">
            <i className="fa-solid fa-ticket"></i>&nbsp;My Tickets
          </button>
          <button className="hover:underline h-16 rounded-3xl ">
            <i className="fa-solid fa-crown"></i>&nbsp;Favourite
          </button>
          <button className="hover:underline h-16 rounded-3xl ">
            <i className="fa-regular fa-comment-dots"></i>&nbsp;Messages
          </button>
          <button className="hover:underline h-16 rounded-3xl ">
            <i className="fa-solid fa-circle-dollar-to-slot"></i>
            &nbsp;Transaction
          </button>
          <button className="hover:underline h-16 rounded-3xl ">
            <i className="fa-solid fa-gear"></i>&nbsp;Settings
          </button>
        </div>
        <div className="bottom text-2xl! flex flex-col! text-center  mt-auto! mb-5!">
          <button className="hover:bg-[#eae9e9] h-16 rounded-3xl ">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Log
            out
          </button>
        </div>
      </div>
    </>
  )
}
