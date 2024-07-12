import { Suspense } from 'react';
import { type RouteProps } from 'react-router-dom';

import LazyCreate from '@/pages/Create/ui/Create.async.tsx';
import LazyProfile from '@/pages/Profile/ui/Profile.async';
import NotFound from '@/pages/NotFound/ui/NotFound';
import { PageLoader } from '@/widgets/PageLoader';

import PrivateRouteWrapper from "../../routerWrappers/PrivateRouteWrapper.tsx";

import {RoutePaths} from "./RouterTypes.ts";
import {ArtDetails} from "@/pages/ArtDetails";
import {ArtCollection} from "@/pages/ArtCollection";


export const RouteConfig: RouteProps[] = [
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
    path: RoutePaths.artDetails,
    element: (
        <PrivateRouteWrapper>
          <Suspense fallback={<PageLoader/>}>
            <ArtDetails />
          </Suspense>
        </PrivateRouteWrapper>
    )
  },
  {
    path: RoutePaths.artCollection,
    element: (
        <PrivateRouteWrapper>
          <Suspense fallback={<PageLoader/>}>
          <ArtCollection />
          </Suspense>
        </PrivateRouteWrapper>
    )
  },
  {
    path: RoutePaths.notFound,
    element: <NotFound />
  }
]
