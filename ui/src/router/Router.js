// ** React Imports
import { Suspense, lazy, Fragment } from 'react'

// ** Custom Components
import Spinner from '@components/LoadingSpinner' // Uncomment if your require content fallback

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Routes & Default Routes
import { Routes } from './routes'

const Router = () => {

  const NotAuthorized = lazy(() => import('@views/NotAuthorized'))

  // ** Init Error Component
  const Error = lazy(() => import('@views/Error'))


  // ** Return Route to Render
  const ResolveRoutes = () => {
    return (
      <Fragment>
        {Routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact === true}
              render={props => {
                return (
                  <Suspense fallback={<Spinner/>}>
                    <route.component {...props} />
                  </Suspense>
                )
              }}
            />
          )
        })}
      </Fragment>
    )
  }

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>

        {/* All Valid Path Pages */}
        {ResolveRoutes()}

        {/* Not Auth Route */}
        <Route
          exact
          path='/not-authorized'
          render={props => (
              <NotAuthorized />
          )}
        />
        
        {/* NotFound Error page */}
        <Route path='*' component={Error} />

      </Switch>
    </AppRouter>
  )
}

export default Router
