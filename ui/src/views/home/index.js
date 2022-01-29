
import { getAllRecipeTypes } from '@api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const getData = async () => {
    const response = await getAllRecipeTypes()
    setRecipes(response.data.recipe_types)
  }

  useEffect(() => {
    getData()
  }, [])

  const tiles = recipes.map(type => {
      return (
          <li key={type.id}>
              <Link to={`/recipes/handlers/${type.id}`}>{`The ${type.name} has a whopping ${type.recipe_quantity} recipes! :o`}</Link>
          </li>
      )
  })

  return (
      <div>
          <h1>Web Nei</h1>
          <h2>There are a total of {recipes.length} machines supported!</h2>
          <ul>
              {tiles}
          </ul>
      </div>
  )
}
export default Home
