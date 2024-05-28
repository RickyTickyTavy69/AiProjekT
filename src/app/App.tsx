import {
    type JSX,
    Suspense,
} from 'react'
import { BrowserRouter } from 'react-router-dom'
import {ErrorBoundary} from "react-error-boundary";
import './main.css'


import { ThemeProvider } from './providers/ThemeProvider'
import { AppRouter } from 'src/app/providers/Router'
import Language from 'src/app/providers/i18n/ui/Language'
import { PageLoader } from 'src/widgets/PageLoader'
import ErrorFallback from "src/widgets/ErrorFallback/ui/ErrorFallback.tsx";
import {StoreProvider} from "./providers/StoreProvider";


// на данный момент есть проблема, при тесте через локи - сторисы компоненты Modal.
// дают ошибку timeout after 1000 ms - надо узнать почему так происходит.
// может быть проапдейтить сторибук, но не как в прошлый раз, а через комманду
// потом на другие компоненты тоже написать тесты и сторисы.

const App = (): JSX.Element => {




  return (
      <StoreProvider>
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
      </StoreProvider>
  )
}

export default App
