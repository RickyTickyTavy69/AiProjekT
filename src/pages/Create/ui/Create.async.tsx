import { lazy } from 'react'
const LazyCreate = lazy(async () => await import('./Create.tsx'))

export default LazyCreate
