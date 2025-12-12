import { motion } from 'framer-motion'
import './css/gridlayout.css'

export default function GridLayout() {
  // Simple reusable variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="outer">
      <div className="main-grid">
        {/* BOX 1 */}
        <motion.div
          className="box box-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="overlay">
            <h2>Built-In Team Chat</h2>
            <p>Communicate instantly within projects—no need to switch apps.</p>
          </div>
        </motion.div>

        {/* BOX 2 */}
        <motion.div
          className="box box-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Task Assignment</h2>
          <p>
            Easily create, assign, and track tasks to keep everyone aligned.
          </p>
        </motion.div>

        {/* BOX 3 */}
        <motion.div
          className="box box-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Real-Time Scheduling</h2>
          <p>
            Plan meetings, set deadlines, and sync calendars all in one place.
          </p>
        </motion.div>

        {/* BOX 4 */}
        <motion.div
          className="box box-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="content">
            <h2>Progress Tracking</h2>
            <p>
              Visualize team performance with dashboards that highlight
              progress.
            </p>
          </div>

          <div className="person-img"></div>
        </motion.div>
      </div>
    </section>
  )
}
