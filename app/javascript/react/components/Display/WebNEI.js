import * as React from 'react';
import { Link } from "react-router-dom"
import Grid from "@mui/material/Grid"

const WebNEIApp = (props) => {
    const [recipes, setRecipes] = React.useState([])

    const getRecipes = async () => {
        const reply = await fetch("api/recipes")
        const parsedJson = await reply.json()
        setRecipes(parsedJson.recipe_types)
    }

    React.useEffect(() => {
        getRecipes()
    }, [])

    const tiles = recipes.map(type => {
        return (
            <li key={type.id}>
                <Link to={`/recipes/${type.name}`}>{`The ${type.name} has a whopping ${type.recipe_quantity} recipes! :o`}</Link>
            </li>
        )
    })

    return (
        <div>
            <h1>WebNEI</h1>
            <h2>There are a total of {recipes.length} machines supported!</h2>
        </div>
    )
}

export default WebNEIApp