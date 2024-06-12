import {
    type JSX,
    Suspense, useEffect,
} from 'react'
import {ErrorBoundary} from "react-error-boundary";
import './main.css'


import { ThemeProvider } from './providers/ThemeProvider'
import { AppRouter } from 'src/app/providers/Router'
import Language from 'src/app/providers/i18n/ui/Language'
import { PageLoader } from 'src/widgets/PageLoader'
import ErrorFallback from "src/widgets/ErrorFallback/ui/ErrorFallback.tsx";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User";

const App = (): JSX.Element => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.getUserFromLocalStorage())
    }, [dispatch])

  return (

        <>
            <Language/>
            <ThemeProvider>
                <Suspense fallback={<PageLoader/>}>
                    <ErrorBoundary fallback={<ErrorFallback/>}>
                        <AppRouter/>
                    </ErrorBoundary>
                </Suspense>
            </ThemeProvider>
        </>



  )
}

export default App
