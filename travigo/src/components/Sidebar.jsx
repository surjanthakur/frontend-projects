import '../css/sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className="sidebar flex flex-col p-5 h-full w-4xl">
        <h1 className="text-2xl! font-bold mt-5 text-center p-1">
          Travigo&nbsp;
          <i class="text-green-500 fa-solid fa-plane-departure"></i>
        </h1>
        <div className="routes">
          <button>
            <i class="fa-regular fa-house"></i>&nbsp;Dashboard
          </button>
          <button>
            <i class="fa-solid fa-ticket"></i>&nbsp;My Tickets
          </button>
          <button>
            <i class="fa-solid fa-crown"></i>&nbsp;Favourite
          </button>
          <button>
            <i class="fa-regular fa-comment-dots"></i>&nbsp;Messages
          </button>
          <button>
            <i class="fa-solid fa-circle-dollar-to-slot"></i>&nbsp;Transaction
          </button>
          <button>
            <i class="fa-solid fa-gear"></i>&nbsp;Settings
          </button>
        </div>
        <div className="bottom">
          <button>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Log out
          </button>
        </div>
      </div>
    </>
  )
}
