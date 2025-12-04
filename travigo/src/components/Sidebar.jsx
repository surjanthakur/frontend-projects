import '../css/sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className="sidebar shadow-lg">
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
