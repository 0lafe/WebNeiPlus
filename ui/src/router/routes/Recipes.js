import { lazy } from 'react'

const RecipesRoutes = [
  {
    path: '/recipes/handlers/:id',
    className: 'recipes',
    exact: true,
    component: lazy(() => import('../../views/recipes/handlers')),
    extra: "recipes"
  },
  {
    path: '/recipes/items/:id',
    className: 'items',
    exact: true,
    component: lazy(() => import('../../views/recipes/handlers')),
    extra: "items"
  }
]

export default RecipesRoutes
