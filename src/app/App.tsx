import {
  type JSX,
  Suspense
} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import { AppRouter } from 'src/app/providers/Router'
import Language from 'src/app/providers/i18n/ui/Language'
import { PageLoader } from 'src/widgets/PageLoader'
import ErrorFallback from "src/widgets/ErrorFallback/ui/ErrorFallback.tsx";
import {ErrorBoundary} from "react-error-boundary";
import './main.css'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Language/>
        <ThemeProvider>
            <Suspense fallback={<PageLoader/>}>
                <ErrorBoundary fallback={<ErrorFallback/>}>
                <AppRouter/>
                </ErrorBoundary>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
