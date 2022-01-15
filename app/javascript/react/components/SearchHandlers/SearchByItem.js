import React from "react"
import RecipeViewHandler from "../SearchHandlers/RecipeViewHandler"

const SearchByItem = (props) => {

    const recipeUrl = `/api/recipes/${props.match.params.id}?searchType=item`
    const nameUrl = `/api/items/${props.match.params.id}`

    return(
        <RecipeViewHandler recipeUrl={recipeUrl} nameUrl={nameUrl}/>
    )
}

export default SearchByItem