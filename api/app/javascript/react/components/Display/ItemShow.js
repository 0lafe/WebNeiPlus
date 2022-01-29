import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GUI from "../UI/GUI"

const ItemShow = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch(`/api/items/${props.match.params.item}`)
        const parsedJson = await reply.json()
        setRecipes(parsedJson.recipes)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div>
            <h1>The "{props.match.params.recipeMap}" has these recipes</h1>
            <hr/>
            {recipes.map(recipe => {
                return (
                    <>
                        <h2>Inputs</h2>
                        <ul>
                            {recipe.inputs.map(input => {
                                return <Link to={`/items/${input.item.id}`}><li key={input.item.id}>{`${input.quantity} ${input.item.localized_name}`}</li></Link>
                            })}
                        </ul>

                        <h2>Outputs</h2>
                        <ul>
                            {recipe.outputs.map(output => {
                                return <Link to={`/items/${output.item.id}`}><li key={output.item.id}>{`${output.quantity} ${output.item.localized_name}`}</li></Link>
                            })}
                        </ul>

                        <h2>{`${recipe.power} eu/t`}</h2>   
                        <h2>{`${recipe.duration} ticks (${recipe.duration/20}s)`}</h2>
                        <hr/>
                    </>
                )
            })}
        </div>
    )
}

export default ItemShow