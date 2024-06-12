import { Suspense } from 'react'
import { type RouteProps } from 'react-router-dom'

import LazyCreate from '../../../pages/Create/ui/Create.async.tsx'
import LazyProfile from '../../../pages/Profile/ui/Profile.async'
import { Main } from '../../../pages/Main.tsx'
import NotFound from '../../../pages/NotFound/ui/NotFound'
import { PageLoader } from 'src/widgets/PageLoader'

import PrivateRouteWrapper from "../../routerWrappers/PrivateRouteWrapper.tsx";

import {RoutePaths} from "./RouterTypes.ts";


export const RouteConfig: RouteProps[] = [
  {
    path: RoutePaths.list,
    element: <Main />
  },
  {
    path: RoutePaths.create,
    element: (
      <Suspense fallback={<PageLoader/>}>
        <LazyCreate/>
      </Suspense>
    )
  },
  {
    path: RoutePaths.profile,
    element: (
        <PrivateRouteWrapper>
          <Suspense fallback={<PageLoader/>}>
            <LazyProfile />
          </Suspense>
        </PrivateRouteWrapper>
    )
  },
  {
    path: RoutePaths.search,
    element: <Main />
  },
  {
    path: RoutePaths.notFound,
    element: <NotFound />
  }
]
