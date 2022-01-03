import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const IndexComponent = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch("api/recipes")
        const parsedJson = await reply.json()
        setRecipes(parsedJson)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const tiles = recipes.map(r => {
        return (
            <li key={r[0]}>
                <Link to={`/recipes/${r[0]}`}>{`The ${r[0]} has a whopping ${r[1]} recipes! :o`}</Link>
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