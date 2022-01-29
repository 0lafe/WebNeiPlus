// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))


ReactDOM.render(
    <Suspense fallback={null}>
      <LazyApp />
    </Suspense>,
  document.getElementById('root')
)