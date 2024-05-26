import { type RouteProps } from 'react-router-dom'
import LazyMenu from '../../../components/Menu/ui/Create.async.tsx'
import { Suspense } from 'react'
import LazyProfile from '../../../pages/Profile/ui/Profile.async'
import SignUp from '../../../pages/SignUp/ui/SignUp'
import { Main } from '../../../pages/Main.tsx'
import NotFound from '../../../pages/NotFound/ui/NotFound'
import { PageLoader } from 'src/widgets/PageLoader'

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
        <LazyMenu/>
      </Suspense>
    )
  },
  {
    path: RoutePaths.profile,
    element: (
      <Suspense fallback={<PageLoader/>}>
        <LazyProfile />
      </Suspense>
    )
  },
  {
    path: RoutePaths.search,
    element: <Main />
  },
  {
    path: RoutePaths.signUp,
    element: <SignUp />
  },
  {
    path: RoutePaths.notFound,
    element: <NotFound />
  }
]
