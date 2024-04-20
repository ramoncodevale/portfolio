import { createContext, useState, useEffect } from 'react'


export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    localStorage.getItem('darkModeEnabled') === 'true',
  )

  useEffect(() => {
    localStorage.setItem('darkModeEnabled', darkModeEnabled)
    if (darkModeEnabled) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkModeEnabled])

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled)
  }

  return (
    <DarkModeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}