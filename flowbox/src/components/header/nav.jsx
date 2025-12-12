import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  const routes = [
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Blog', path: '/blog' },
  ]

  const routes2 = [
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="shadow-lg sticky z-30 top-0  left-0">
      <nav className="nav-container ">
        <div className="nav-left">
          {routes.map((route) => (
            <NavLink key={route.name} to={route.path} className="nav-link">
              {route.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-center">
          <h1 className="logo">Flowblox</h1>
        </div>

        <div className="nav-right">
          {routes2.map((route) => (
            <NavLink key={route.name} to={route.path} className="nav-link">
              {route.name}
            </NavLink>
          ))}

          <button className="cta-btn">
            Get Started&nbsp;
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </nav>
    </header>
  )
}
