import { LOCAL_STORAGE_THEME_KEY, type ThemeType } from 'src/app/providers/ThemeProvider/ui/ThemeProvider'
import { useContext } from 'react'
import { ThemeContext } from 'src/app/providers/ThemeProvider/ui/ThemeProvider'

interface useThemeReturnType {
  handleThemeSwitch: () => void
  theme: ThemeType
}

const useTheme = (): useThemeReturnType => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeSwitch = (): void => {
    setTheme(theme === 'Dark' ? 'Bright' : 'Dark')
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme === 'Dark' ? 'Bright' : 'Dark')
  }

  return {
    theme, handleThemeSwitch
  }
}

export default useTheme
