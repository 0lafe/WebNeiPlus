import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const IndexComponent = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch("api/recipes")
        const parsedJson = await reply.json()
        setRecipes(parsedJson.recipe_types)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const tiles = recipes.map(type => {
        return (
            <li key={type.id}>
                <Link to={`/recipes/${type.id}`}>{`The ${type.name} has a whopping ${type.recipe_quantity} recipes! :o`}</Link>
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

export default IndexComponent