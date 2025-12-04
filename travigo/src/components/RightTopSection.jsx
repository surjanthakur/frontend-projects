import '../css/topsection.css'

export default function RightTopSection() {
  const mountainData = [
    {
      image:
        'https://i.pinimg.com/1200x/7e/84/1c/7e841cb1223977ca0f8d54643368b512.jpg',
      name: 'Mount Forel',
      location: 'Greenland',
      rating: 4.6,
    },
    {
      image:
        'https://i.pinimg.com/736x/c2/99/69/c29969620e552ac4c3879157d648f359.jpg',
      name: 'Eco Camping',
      location: 'Mount Tabu',
      rating: 5.1,
    },
    {
      image:
        'https://i.pinimg.com/736x/72/5e/dd/725edde5b3ba3974122a75f141101bbf.jpg',
      name: 'Mount Snow',
      location: 'Manali',
      rating: 4.5,
    },
  ]
  return (
    <>
      <div className="top-section">
        {/* card */}
        {mountainData.map((card, i) => (
          <div className="mountain-card">
            <img src={card.image} alt="mountain-image" />
            <div className="card-overlay">
              <h1>{card.name}</h1>
              <p>
                <span class="card-info">
                  <i className="fa-solid fa-location-dot"></i>
                  {card.location}
                </span>
                <span className="card-info">
                  <i className="fa-regular fa-star "></i>
                  {card.rating}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
