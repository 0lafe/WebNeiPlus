import React, { useEffect, useState } from "react"
import RecipePage from "../UI/RecipePage"
import { useParams } from "react-router-dom"
import { getRecipe, getRecipeType } from "@api"

const RecipeViewHandler = () => {
    const { id } = useParams()

    const [recipes, setRecipes] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [recipeType, setRecipeType] = useState("")
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getRecipeType(id).then(response => {
            setrecipeMapName(response.name)
            setQuantity(response.quantity)
        })
    }, [])

    useEffect(() => {
        getRecipe(id, page, limit).then(response => {
            setRecipes(response.recipes)
        })
    }, [page])

    return (
        <RecipePage 
        recipes={recipes} 
        name={recipeType} 
        quantity={quantity} 
        setPage={setPage} 
        setRecipesPerPage={setlimit}/>
    )
}

export default RecipeViewHandler