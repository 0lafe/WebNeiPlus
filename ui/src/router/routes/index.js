// ** Routes Imports
import RecipesRoutes from './Recipes'
import ItemRoutes from './Items'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
  ...RecipesRoutes,
  ...ItemRoutes,
]

export { DefaultRoute, Routes }
