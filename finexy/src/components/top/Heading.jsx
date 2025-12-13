import { userContext } from '../../context/user'

export default function Heading() {
  const { user } = userContext()
  return (
    <div className="px-2 py-2">
      <h1 className="text-3xl text-black">
        🙏🏻Welcome,{user?.name?.first}&nbsp;{user?.name?.last}{' '}
      </h1>
      <p className="text-sm text-gray-400">
        🧠: stay on top of your task, monito progres, and track status,
      </p>
    </div>
  )
}
