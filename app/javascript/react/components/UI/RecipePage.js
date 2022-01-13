import React from "react"
import ItemBox from "../Shapes/ItemBox"
import RecipeComponent from "./RecipeComponent"

const RecipePage = (props) => {
    const { recipes, name } = props

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
                    {name}
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