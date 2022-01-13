import React, { useEffect, useState } from "react"
import helperFetch from "../Helpers/helperFetch"
import RecipePage from "./RecipePage"

const SearchByType = (props) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        helperFetch(`/api/recipes/${props.match.params.recipeMap}?searchType=map`).then(response => {
            setRecipes(response.recipes)
        })
    }, [])

    return (
        <RecipePage recipes={recipes} name={props.match.params.recipeMap}/>
    )
}

export default SearchByType