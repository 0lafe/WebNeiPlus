import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexComponent from './Display/Index'
import WebNEIApp from './Display/WebNEI'
import SearchByItem from './SearchHandlers/SearchByItem'
import SearchByType from './SearchHandlers/SearchByType'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={IndexComponent}/>
        <Route exact path ="/recipes/:id" component={SearchByType}/>
        <Route exact path ="/items/:id" component={SearchByItem}/>
        <Route exact path ="/v2" component={WebNEIApp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App