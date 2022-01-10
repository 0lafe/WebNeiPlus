import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const RecipeShow = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch(`/api/recipes/${props.match.params.recipeMap}`)
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
                                let itemName = input.item.localized_name
                                if (!input.item.localized_name) {
                                    itemName = `${input.item.modid}.${input.item.item_id}:${input.item.metadata}`
                                }
                                return <Link to={`/items/${input.item.id}`}><li key={input.item.id}>{`${input.quantity} ${itemName}`}</li></Link>
                            })}
                        </ul>

                        <h2>Outputs</h2>
                        <ul>
                            {recipe.outputs.map(output => {
                                let itemName = output.item.localized_name
                                if (!output.item.localized_name) {
                                    itemName = `${output.item.modid}.${output.item.item_id}:${output.item.metadata}`
                                }
                                return <Link to={`/items/${output.item.id}`}><li key={output.item.id}>{`${output.quantity} ${itemName}`}</li></Link>
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

export default RecipeShow