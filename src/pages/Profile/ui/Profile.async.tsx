import { lazy } from 'react'
const LazyProfile = lazy(async () => await import('./Profile.tsx'))
export default LazyProfile
