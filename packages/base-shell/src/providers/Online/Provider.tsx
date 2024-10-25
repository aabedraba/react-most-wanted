import React, { useState, ReactNode } from 'react'
import Context from './Context'

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [isOnline, setOnline] = useState(navigator.onLine)

  window.addEventListener('online', () => setOnline(true))
  window.addEventListener('offline', () => setOnline(false))

  return <Context.Provider value={isOnline}>{children}</Context.Provider>
}

export default Provider
