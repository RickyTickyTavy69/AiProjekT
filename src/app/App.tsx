import {
    type JSX,
    Suspense, useEffect,
} from 'react'
import {ErrorBoundary} from "react-error-boundary";
import './main.css'


import { ThemeProvider } from './providers/ThemeProvider'
import { AppRouter } from '@/app/providers/Router'
import Language from '@/app/providers/i18n/ui/Language'
import PageLoader from "@/widgets/PageLoader/ui/PageLoader.tsx";
import ErrorFallback from "@/widgets/ErrorFallback/ui/ErrorFallback.tsx";
import {useDispatch} from "react-redux";
import {userActions} from "@/entities/User";

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
