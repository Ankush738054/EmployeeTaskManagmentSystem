import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorage'

export const Authcontext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    setLocalstorage()
    const { employees } = getLocalstorage()
    setuserData( employees)

  }, [])


  return (
    <div>
      <Authcontext.Provider value={[userData,setuserData]} >
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
