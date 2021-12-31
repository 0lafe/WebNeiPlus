import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexComponent from './Display/Index'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={IndexComponent}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
