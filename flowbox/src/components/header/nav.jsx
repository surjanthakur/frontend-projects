import { NavLink } from 'react-router-dom'
import './nav.css'
export default function nav() {
  const routes = [
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Features',
      path: '/features',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
  ]

  const routes2 = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Pricing',
      path: '/pricing',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]
  return (
    <header>
      <nav className="w-full h-40 p-4 sticky top-0 left-0 z-40 ">
        {/* box-1 */}
        <div className="box-1">
          {routes.map((route) => (
            <NavLink key={route.name} to={route.path}>
              {route.name}
            </NavLink>
          ))}
        </div>
        {/* box-2 */}
        <div className="box-2">
          <h1>Flowblox</h1>
        </div>
        {/* box-3 */}
        <div className="box-3">
          {routes2.map((route) => (
            <NavLink key={route.name} to={route.path}>
              {route.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
