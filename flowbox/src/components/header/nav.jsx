import { NavLink } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
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

  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
        }}
        className="scroll-progress-bar"
      />

      <header className="shadow-lg sticky z-30 top-0 left-0 bg-white/70 backdrop-blur-md">
        <nav className="nav-container">
          {/* LEFT LINKS */}
          <motion.div
            className="nav-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {routes.map((route, i) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.2 }}
              >
                <NavLink to={route.path} className="nav-link">
                  {route.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* LOGO */}
          <motion.div
            className="nav-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <h1 className="logo">Flowblox</h1>
          </motion.div>

          {/* RIGHT LINKS */}
          <motion.div
            className="nav-right"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {routes2.map((route, i) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              >
                <NavLink to={route.path} className="nav-link">
                  {route.name}
                </NavLink>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.button
              className="cta-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              Get Started&nbsp;
              <i className="fa-solid fa-angles-right"></i>
            </motion.button>
          </motion.div>
        </nav>
      </header>
    </>
  )
}
