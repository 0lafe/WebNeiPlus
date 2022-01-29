import { lazy } from 'react'

const ItemRoutes = [
  {
    path: '/items/:id',
    className: 'items',
    component: lazy(() => import('../../views/items'))
  },
]

export default ItemRoutes
