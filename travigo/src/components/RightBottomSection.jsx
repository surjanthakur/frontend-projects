import { Calendar, Filter, MapPin, Star } from 'lucide-react'
import { motion } from 'motion/react'

export default function RightBottomSection() {
  const destinations = [
    {
      id: 1,
      name: 'Redwood Forest',
      location: 'California',
      rating: 4.9,
      price: 150,
      image: '🌲',
    },
    {
      id: 2,
      name: 'Sahale Glacier Camp',
      location: 'Washington',
      rating: 4.7,
      price: 100,
      image: '⛺',
    },
    {
      id: 3,
      name: 'Monteverde Forest',
      location: 'Costa Rica',
      rating: 4.5,
      price: 120,
      image: '🌳',
    },
  ]

  const schedules = [
    {
      id: 1,
      name: 'Crooked Forest',
      dates: '16 June - 20 June',
      participants: '+2',
      image: '🌲',
    },
    {
      id: 2,
      name: 'Gioc Waterfall',
      dates: '22 June - 26 June',
      participants: '+4',
      image: '💧',
    },
    {
      id: 3,
      name: 'Tartaruga Camp',
      dates: '1 July - 7 July',
      participants: '+6',
      image: '🏕️',
    },
  ]

  return (
    <div className="flex gap-6 p-8! bg-gray-50 rounded-2xl!">
      {/* Left Section - Destinations */}
      <div className="flex-1 bg-white rounded-3xl p-8! shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Best Destination 🌈
            </h1>
            <p className="text-gray-400">100 Destination found</p>
          </div>
          <button className="flex items-center gap-2 p-4! border-2 border-gray-200 rounded-full hover:bg-gray-50 transition">
            <Filter size={20} />
            <span className="font-medium">Filters</span>
          </button>
        </div>

        <div className="mt-3!">
          {destinations.map((dest) => (
            <motion.div
              transition={{ ease: 'anticipate' }}
              whileHover={{ y: -10 }}
              key={dest.id}
              className="flex items-center justify-between p-4! hover:bg-gray-50 shadow-lg rounded-2xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-linear-to-br from-emerald-200 to-teal-300 rounded-2xl flex items-center justify-center text-4xl">
                  {dest.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{dest.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span>{dest.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">
                  ${dest.price}
                  <span className="text-sm font-normal text-gray-400">
                    /day
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Middle Section - Explore Card */}
      <div className="w-80 bg-linear-to-b from-slate-800 to-slate-900 rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center text-center">
        <div className="w-48 h-48 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-xl">
          <div className="text-8xl!">🏡</div>
        </div>
        <h2 className="text-3xl! font-bold text-white mb-2! mt-2!">
          Let's Explore
          <br />
          The Beauty
        </h2>
        <p className="text-gray-400 mb-8!">Get special offers & news</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-50 h-16 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-4xl! transition shadow-lg"
        >
          Join Now
        </motion.button>
      </div>

      {/* Right Section - Schedule */}
      <div className="w-96 bg-white rounded-3xl p-8! shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">My Schedule 📍</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="18" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="mt-4!">
          {schedules.map((schedule) => (
            <motion.div
              transition={{ ease: 'backInOut' }}
              whileHover={{ y: -10 }}
              key={schedule.id}
              className="flex items-center gap-4 p-4! hover:bg-gray-50 shadow-lg rounded-2xl transition cursor-pointer"
            >
              <div className="w-20 h-20 bg-linear-to-br from-emerald-200 to-teal-300 rounded-2xl flex items-center justify-center text-3xl">
                {schedule.image}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {schedule.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Calendar size={14} />
                  <span>{schedule.dates}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 ml-1">
                    {schedule.participants}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
