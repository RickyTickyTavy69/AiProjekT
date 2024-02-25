import { lazy } from 'react'
const LazyProfile = lazy(async () => await import('./Profile'))
export default LazyProfile
