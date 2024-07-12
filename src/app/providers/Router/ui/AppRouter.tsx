import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '@/pages/Main.tsx'
import { RouteConfig } from '@/shared/config/routeConfig/routeConfig'

const AppRouter = (): React.ReactNode => {
  return (
        <Routes>
            <Route path={'/'} element={
                    <Main />
            } >
                {RouteConfig.map((route, idx) => {
                  return <Route
                      key={idx}
                      path={route.path}
                      element={route.element}
                  />
                })}
            </Route>
        </Routes>
  )
}

export default AppRouter
