import React, { createContext, useMemo, useState } from 'react'
import { useMedia } from 'react-use'

export type ThemeType = 'Dark' | 'Bright'
interface ContextProps {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const initial: ContextProps = {
  theme: 'Dark',
  setTheme: (): void => {}
}

export const ThemeContext = createContext<ContextProps>(initial)

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType
  const prefedTheme: ThemeType = useMedia('(prefers-color-scheme: dark)') ? 'Dark' : 'Bright'

  const [theme, setTheme] =
        useState<ThemeType>(localTheme || prefedTheme)

  // document.documentElement.className = theme.toLowerCase() think, this is not needed

  const ContextProps = useMemo(() => ({ setTheme, theme }), [theme])

  // в themeContext.Provider передаётся обьект, и каждый раз при рендере компоненты, он будет создаваться заново и
  // и ссылка на него будет каждый раз новая. useMemo позволяет мемоизировать объект, для того чтобы он не создавался каждый раз
  // по новой. Он будет создаваться снова только, если какая то из его зависимостей поменяется.

  return (
            <ThemeContext.Provider value={ContextProps}>
                {children}
            </ThemeContext.Provider>
  )
}

export default ThemeProvider
