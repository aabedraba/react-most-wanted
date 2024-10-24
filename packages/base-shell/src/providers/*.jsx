import React, { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

// Define the state shape based on existing provider implementation
interface AuthState {
  isAuthenticated: boolean
  user?: any // Replace with proper user type
}

interface AuthContextProps {
  children: ReactNode
  initState?: Partial<AuthState>
}

const AuthContext = createContext<AuthState | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<AuthContextProps> = ({ 
  children,
  initState = {}
}) => {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    ...initState
  })

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}
