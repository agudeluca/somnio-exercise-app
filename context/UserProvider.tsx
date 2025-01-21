import React, {
  createContext,
  useState,
  useContext,
  SetStateAction
} from "react"

const UserContext = createContext({
  userId: 1,
  setUserId: (_: SetStateAction<number>) => {}
})

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState(1)

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  )
}
