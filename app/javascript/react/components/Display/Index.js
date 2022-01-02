import React, { useEffect, useState } from "react"

const IndexComponent = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch("api/recipes")
        const parsedJson = await reply.json()
        setRecipes(parsedJson.recipes)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const tiles = recipes.map(r => {
        console.log(r.name)
        return (
            <li key={r.name}>
                {r.name}
            </li>
        )
    })

    return (
        <div>
            <h1>Hello</h1>
            <h2>{recipes.length}</h2>
            <ul>
                {tiles}
            </ul>
        </div>
    )
}

export default IndexComponent