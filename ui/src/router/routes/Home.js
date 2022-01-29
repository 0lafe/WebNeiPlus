import { lazy } from 'react'

const HomeRoutes = [
  {
    path: '/',
    className: 'home',
    exact: true,
    component: lazy(() => import('../../views/home'))
  },
]

export default HomeRoutes
