import { userContext } from '../../context/user'

export default function Navbar() {
  const { user } = userContext()
  const routes = [
    { name: 'Overview', path: '/', active: true },
    { name: 'Activity', path: '/' },
    { name: 'Manage', path: '/' },
    { name: 'Program', path: '/' },
    { name: 'Account', path: '/' },
    { name: 'Reports', path: '/' },
  ]

  return (
    <nav className="sticky top-0 z-40 w-full p-2!">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <div className="flex items-center gap-3 bg-white px-3.5! h-12 rounded-4xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <i className="fa-brands fa-monero text-lg"></i>
          </div>
          <span className="text-lg font-semibold text-gray-900">Finexy</span>
        </div>

        {/* ROUTES */}
        <div className="flex items-center h-14 rounded-full bg-white px-2! py-1! shadow-sm">
          {routes.map((route) => (
            <span
              key={route.name}
              className={`cursor-pointer rounded-full px-4! py-2! text-lg! font-medium! transition
                ${
                  route.active
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              {route.name}
            </span>
          ))}
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-black">
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-black">
            <i className="fa-regular fa-bell text-lg"></i>
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-black">
            <i className="fa-solid fa-circle-exclamation text-lg"></i>
          </button>
        </div>
        {/* random user section */}
        <div className="h-16 bg-white rounded-4xl">
          <img></img>
          <p></p>
        </div>
      </div>
    </nav>
  )
}
