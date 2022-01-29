// ** Routes Imports
import RecipesRoutes from './Recipes'
import ItemRoutes from './Items'
import HomeRoutes from './Home'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
  ...RecipesRoutes,
  ...ItemRoutes,
  ...HomeRoutes,
]

export { DefaultRoute, Routes }
