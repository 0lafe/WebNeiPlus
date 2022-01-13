import React, { useEffect, useState } from "react"
import helperFetch from "../Helpers/helperFetch"
import RecipePage from "./RecipePage"

const SearchByItem = (props) => {
    const [recipes, setRecipes] = useState([])
    const [itemName, setItemName] = useState("")

    useEffect(() => {
        helperFetch(`/api/recipes/${props.match.params.item}?searchType=item`).then(response => {
            setRecipes(response.recipes)
        })
        helperFetch(`/api/items/${props.match.params.item}`).then(response => {
            setItemName(response.name)
        })
    }, [])

    return (
        <RecipePage recipes={recipes} name={itemName}/>
    )
}

export default SearchByItem