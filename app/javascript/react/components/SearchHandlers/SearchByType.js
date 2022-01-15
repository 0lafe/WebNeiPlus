import React from "react"
import RecipeViewHandler from "./RecipeViewHandler"

const SearchByType = (props) => {

    const recipeUrl = `/api/recipes/${props.match.params.id}?searchType=map`
    const nameUrl = `/api/recipe_types/${props.match.params.id}`

    return(
        <RecipeViewHandler recipeUrl={recipeUrl} nameUrl={nameUrl}/>
    )
}

export default SearchByType