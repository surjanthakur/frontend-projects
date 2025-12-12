import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './imageSlider.css'

const images = [
  'https://i.pinimg.com/736x/db/cc/ce/dbccce4821c25a912ca1dfd2250604e8.jpg',
  'https://i.pinimg.com/1200x/a0/8e/e6/a08ee6af2e45ae14bdb470ea55c1b775.jpg',
  'https://i.pinimg.com/1200x/0c/c3/62/0cc3627fc645e12007f5d47bb7181ac9.jpg',
  'https://i.pinimg.com/736x/0f/03/97/0f0397e7a3b53010a38a46c0fc272bbb.jpg',
  'https://i.pinimg.com/736x/d2/df/c0/d2dfc0f78c98858362e6ea627c5adb5d.jpg',
  'https://i.pinimg.com/1200x/dd/d0/3a/ddd03a507b6966e59e790639ef8c3cd5.jpg',
  'https://i.pinimg.com/736x/55/35/7f/55357f996d8112801c34b36611cecb4a.jpg',
  'https://i.pinimg.com/736x/45/6f/e8/456fe8230ff5690b641e4e7544adc433.jpg',
  'https://i.pinimg.com/736x/6f/b0/f9/6fb0f93bff3af6f12919cdb08b5daca1.jpg',
]

export default function HeroImagesSlider() {
  return (
    <div className="hero-images-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        spaceBetween={24}
        slidesPerView={'auto'}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        className="hero-swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="hero-slide">
            <div className="card-outer">
              <div className="card-inner">
                <img src={src} alt={`person-${i}`} className="card-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
