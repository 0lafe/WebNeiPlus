import { Paper, styled } from "@mui/material"
import React, { useEffect, useState } from "react"
import RecipeComponent from "./RecipeComponent"


const RecipePage = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const reply = await fetch(`/api/recipes/${props.match.params.recipeMap}`)
        const parsedJson = await reply.json()
        setRecipes(parsedJson.recipes)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const ItemBox = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <div style={{display: 'flex', justifyContent:"center"}}>
                <ItemBox sx={{
                            width: "85%",
                            height: 50,
                            backgroundColor: 'gray',
                            display: "flex",
                            justifyContent:"center", 
                            alignItems: "center"
                        }}>
                <span>
                    {props.match.params.recipeMap}
                </span>
                </ItemBox>
            </div>
            <div className="text-center">
                <span>
                    This is the page component
                </span>
            </div>
                {recipes.map(recipe => {
                    return (
                        <div key={recipe.id} style={{display: 'flex', justifyContent:"center"}}>
                            <RecipeComponent recipe={recipe}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default RecipePage