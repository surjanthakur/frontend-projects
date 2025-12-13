import { createContext, useContext } from 'react'

const RandomUser = createContext({
  user: null,
  setUser: () => {},
})

export const RandomUserProvider = RandomUser.Provider

export function userContext() {
  return useContext(RandomUser)
}
