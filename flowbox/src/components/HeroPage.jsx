import './heropage.css'
import HeroImagesSlider from './imageSlider'
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
      <div className="hero-heading">
        <h1 className="line1">Streamline Your Team,</h1>
        <h1 className="line2">Supercharge Your Workflow</h1>

        <p className="sub1">All-in-one platform to plan, collaborate,</p>
        <p className="sub2">and deliver — faster and smarter.</p>

        <button className="cta">
          Get started for Free&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>

      {/* IMAGES SLIDER*/}
      <div className="hero-images">
        <HeroImagesSlider />
      </div>

      {/* FEATURE CARDS */}
      <div className="features-card">
        {cards.map((card, idx) => (
          <div key={idx} className="feature-item">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
