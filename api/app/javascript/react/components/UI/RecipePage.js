import React, { useEffect, useState } from "react"
import GUI from "../GUI/GUI"
import ItemBox from "../Shapes/ItemBox"
import PageComponent from "./PageComponent"

const RecipePage = ({ recipes, name, quantity, setPage, guiUrl, scale }) => {
    const [recipesPerPage, setRecipesPerPage] = useState(10)

    const changePage = (event, page) => {
        setPage(page)
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "center", paddingBottom: 10, paddingTop: 10}}>
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
            <div style={{display: 'flex', justifyContent: "center", paddingBottom: 10}}>
                <ItemBox sx={{
                                width: "85%",
                                height: 50,
                                backgroundColor: 'gray',
                                display: "flex",
                                justifyContent:"center", 
                                alignItems: "center"
                            }}>
                    <PageComponent count={Math.ceil(quantity/recipesPerPage)} onChange={changePage}/>
                </ItemBox>
            </div>
                {recipes.map(recipe => {
                    return (
                        <div key={recipe.id} style={{display: 'flex', justifyContent:"center"}}>
                            <GUI recipe={recipe} url={guiUrl} scale={scale}/>
                        </div>

                    )
                })} 
        </div>
    )
}

export default RecipePage