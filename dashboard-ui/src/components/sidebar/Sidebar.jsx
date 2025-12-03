export default function Sidebar() {
  return (
    <div className="sidebar sticky top-0  shadow-2xl h-screen w-[260px] bg-white flex flex-col  px-6 py-8 border-r border-gray-200">
      {/* LOGO */}
      <h1 className="head text-gray-800 font-sans text-start">
        <i className="fa-solid fa-layer-group text-2xl!"></i>&nbsp; your
        dashboard
      </h1>

      {/* MAIN MENU */}
      <div className="flex flex-col font-bold gap-3 text-sm mt-20 text-gray-600">
        <SidebarItem icon="fa-globe" label="Analytics" active />
        <SidebarItem icon="fa-bag-shopping" label="Products" />
        <SidebarItem icon="fa-message" label="Messages" />
        <SidebarItem icon="fa-users" label="Customers" />
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-2 text-2xl font-bold mt-auto text-gray-600">
        <img
          src="https://i.pinimg.com/736x/a1/ab/f2/a1abf26afc39289d97012209eeffa55e.jpg"
          alt="image"
          className="w-100 h-10 rounded-lg  object-cover transition-transform duration-500 hover:scale-105"
        ></img>
        <SidebarItem icon="fa-gear" label="Settings" />
        <SidebarItem
          icon="fa-arrow-right-from-bracket"
          label="Sign out"
          logout
        />
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active, logout }) {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
        ${active ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100'}
        ${logout ? 'text-red-500 hover:bg-red-50' : ''}
      `}
    >
      <i className={`fa-solid ${icon} text-xs`}></i>
      <span>{label}</span>
    </div>
  )
}
