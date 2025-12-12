import { motion } from 'framer-motion'

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <footer className="relative bg-[#1a1a1a] text-gray-300 px-8! py-20! overflow-hidden">
      {/* BIG BACKGROUND LOGO */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07] text-[22rem] font-bold uppercase tracking-tight select-none">
        flowbox
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative grid grid-cols-2 md:grid-cols-5 gap-10 z-10"
      >
        {/* Platform */}
        <div>
          <h3 className="font-semibold text-white mb-4!">Platform</h3>
          <ul className="space-y-2! text-sm">
            <li>Accounts Payable</li>
            <li>Global Receivables</li>
            <li>Currency Conversions</li>
            <li>Treasury Management</li>
            <li>Corporate Cards</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-white mb-4!">Solutions</h3>
          <ul className="space-y-2! text-sm">
            <li>Tech</li>
            <li>E-commerce</li>
            <li>Manufacturing</li>
            <li>Food & Agriculture</li>
            <li>Automobile Industry</li>
            <li>Retail & Wholesale</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4!">Company</h3>
          <ul className="space-y-2! text-sm">
            <li>About Us</li>
            <li>Submit Pitch Deck</li>
          </ul>

          <h3 className="font-semibold text-white mt-6! mb-2!">Pricing</h3>
          <ul className="space-y-2! text-sm">
            <li>Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-4!">Resources</h3>
          <ul className="space-y-2! text-sm">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Changelog</li>
            <li>Advanced Content</li>
          </ul>

          <h3 className="font-semibold text-white mt-6! mb-2!">Tools</h3>
          <ul className="space-y-2! text-sm">
            <li>Bank Coordinates Checker</li>
            <li>FX Markup Analysis Tool</li>
            <li>Send Money Internationally</li>
          </ul>
        </div>

        {/* Right side CTA */}
        <div className="flex flex-col space-y-4">
          <button className="bg-white text-black px-6! py-3! rounded-lg font-semibold! w-max">
            Get Started
          </button>

          <p className="text-sm! mt-3! leading-relaxed! text-gray-400">
            606 4th Street SW, Suite 1100
            <br />
            Calgary, Alberta
            <br />
            T2P 1T1, Canada
          </p>

          <div className="flex space-x-4 mt-4">
            <button className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              x
            </button>
            <button className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              in
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mt-20 text-xs text-gray-500 z-10"
      >
        <p>
          © 2024 — All rights reserved Flowbox Inc. All regulatory and
          compliance information goes here exactly like the screenshot.
        </p>

        <div className="flex justify-end space-x-6 mt-4 text-gray-400">
          <span>Press and Media</span>
          <span>Privacy Policy</span>
        </div>
      </motion.div>
    </footer>
  )
}
