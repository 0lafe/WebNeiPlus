import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexComponent from './Display/Index'
import ItemShow from './Display/ItemShow'
import RecipeShow from './Display/RecipeShow'
import WebNEIApp from './Display/WebNEI'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={IndexComponent}/>
        <Route exact path ="/recipes/:recipeMap" component={RecipeShow}/>
        <Route exact path ="/items/:item" component={ItemShow}/>
        <Route exact path ="/v2" component={WebNEIApp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App