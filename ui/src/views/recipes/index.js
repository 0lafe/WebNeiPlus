import React, { useEffect, useState } from "react"
import RecipePage from "../UI/RecipePage"
import { useParams } from "react-router-dom"
import { getRecipe, getRecipeType } from "@api"

const Recipes = () => {
    const { id } = useParams()

    const [recipes, setRecipes] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [recipeType, setRecipeType] = useState("")
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getRecipeType(id).then(response => {
            setrecipeMapName(response.data.name)
            setQuantity(response.data.quantity)
        })
    }, [])

    useEffect(() => {
        getRecipe(id, page, limit).then(response => {
            setRecipes(response.data.recipes)
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

export default Recipes