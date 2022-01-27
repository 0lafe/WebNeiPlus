import React from "react"
import ItemIcon from "../UI/ItemIcon"

const GUI = ({ url, recipe }) => {

    console.log(recipe)
    let image
    if (url) {
        image = (
            <div className="recipe-gui-container" style={{position: 'relative'}}>
                <img src={require("../dev-data/guis/" + url)} width={1000}/>
                {recipe.inputs.map(input => {
                    return (<ItemIcon 
                        item={input.item} 
                        quantity={input.quantity}
                        x={input.relx} 
                        y={input.rely} 
                        scale={4.2}
                        key={input.id}
                        />)
                })}
            </div>
        )
    } else {
        image = <h1>Sorry Bruv</h1>
    }

    return (
        <div>
            {image}
        </div>
    )
}

export default GUI