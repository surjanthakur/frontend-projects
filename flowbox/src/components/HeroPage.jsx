import './css/heropage.css'
import HeroImagesSlider from './imageSlider'
import { motion } from 'framer-motion'

export default function HeroPage() {
  const cards = [
    {
      title: 'Real-Time Collaboration',
      content:
        'Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.',
    },
    {
      title: 'Task & Project Tracking',
      content:
        'Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team’s style.',
    },
    {
      title: 'Performance Insights',
      content:
        'Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.',
    },
  ]

  return (
    <section className="hero">
      {/* HERO HEADING */}
      <motion.div
        className="hero-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="line1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Streamline Your Team,
        </motion.h1>

        <motion.h1
          className="line2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Supercharge Your Workflow
        </motion.h1>

        <motion.p
          className="sub1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          All-in-one platform to plan, collaborate,
        </motion.p>

        <motion.p
          className="sub2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          and deliver — faster and smarter.
        </motion.p>

        <motion.button
          className="cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
        >
          Get started for Free&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </motion.button>
      </motion.div>

      {/* IMAGES SLIDER */}
      <motion.div
        className="hero-images"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroImagesSlider />
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="features-card">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="feature-item"
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ scale: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </motion.div>
        ))}
      </div>

      {/* SECOND HEADING BLOCK */}
      <motion.div
        className="hero-heading mt-10!"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="line1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Work Smarter 🧠
        </motion.h1>

        <motion.h1
          className="line2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything Your team needs to.
        </motion.h1>

        <motion.p
          className="sub1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          All-in-one platform to plan, collaborate,
        </motion.p>

        <motion.p
          className="sub2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          and deliver — faster and smarter.
        </motion.p>

        <motion.button
          className="cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
        >
          View plans&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </motion.button>
      </motion.div>
    </section>
  )
}
