import React, { useEffect, useState } from "react"
import helperFetch from "../Helpers/helperFetch"
import RecipePage from "../UI/RecipePage"

const RecipeViewHandler = (props) => {
    const { recipeUrl, nameUrl } = props

    const [recipes, setRecipes] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [recipeMapName, setrecipeMapName] = useState("")
    const [recipesPerPage, setRecipesPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const [guiUrl, setGuiUrl] = useState(null)

    useEffect(() => {
        helperFetch(nameUrl).then(response => {
            setrecipeMapName(response.name)
            setQuantity(response.quantity)
            setGuiUrl(response.gui_url)
        })
    }, [])

    useEffect(() => {
        helperFetch(`${recipeUrl}&page=${page}&perPage=${recipesPerPage}`).then(response => {
            setRecipes(response.recipes)
        })
    }, [page])

    return (
        <RecipePage 
        recipes={recipes} 
        name={recipeMapName} 
        quantity={quantity} 
        setPage={setPage} 
        setRecipesPerPage={setRecipesPerPage}
        guiUrl={guiUrl}/>
    )
}

export default RecipeViewHandler