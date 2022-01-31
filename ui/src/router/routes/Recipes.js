import { lazy } from 'react'

const RecipesRoutes = [
  {
    path: '/recipes/handlers/:id',
    className: 'recipes',
    component: lazy(() => import('../../views/recipes/handlers'))
  },
  {
    path: '/recipes/items/:id',
    className: 'items',
    component: lazy(() => import('../../views/recipes/handlers'))
  }
]

export default RecipesRoutes
