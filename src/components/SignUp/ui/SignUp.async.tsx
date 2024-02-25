import { lazy } from 'react'
const LazySignUp = lazy(async () => await import('./SignUp'))
export default LazySignUp
