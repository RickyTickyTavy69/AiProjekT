import { lazy } from 'react'
const LazyMenu = lazy(async () => await import('./Menu'))

export default LazyMenu
