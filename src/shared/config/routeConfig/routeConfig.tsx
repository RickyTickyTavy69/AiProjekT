import { type RouteProps } from 'react-router-dom'
import LazyMenu from '../../../components/Menu/ui/Menu.async'
import { Suspense } from 'react'
import LazyProfile from '../../../components/Profile/ui/Profile.async'
import SignUp from 'src/components/SignUp/ui/SignUp'
import { Main } from 'src/components/Main'
import NotFound from 'src/components/NotFound/ui/NotFound'
import { PageLoader } from 'src/widgets/PageLoader'

export type AppRoutes = 'menu' | 'profile' | 'signUp' | 'search' | 'list' | 'notFound'

export const RoutePaths: Record<AppRoutes, string> = {
  list: '/list',
  menu: '/menu',
  profile: '/profile',
  search: '/search',
  signUp: '/signUp',
  notFound: '*'
}

export const RouteConfig: RouteProps[] = [
  {
    path: RoutePaths.list,
    element: <Main />
  },
  {
    path: RoutePaths.menu,
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
