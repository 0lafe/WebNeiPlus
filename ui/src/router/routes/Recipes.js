import { lazy } from 'react'

const RecipesRoutes = [
  {
    path: '/recipes/:id',
    className: 'recipes',
    component: lazy(() => import('../../views/recipes'))
  },
]

export default RecipesRoutes
