import { lazy } from 'react'
const LazySignUp = lazy(async () => await import('./SignUp.tsx'))
export default LazySignUp
