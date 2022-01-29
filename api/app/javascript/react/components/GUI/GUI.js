import React from "react"
import { Link } from "react-router-dom"
import ItemIcon from "../UI/ItemIcon"

const GUI = ({ url, recipe, scale }) => {

    // width={1000}
    let image
    if (url) {
        image = (
            <div style={{position: 'relative'}}>
                <img src={require("../dev-data/guis/" + url)}/>
                {recipe.inputs.map(input => {
                    return (
                        <Link to={`/items/${input.item.id}`}>
                            <ItemIcon 
                            item={input.item} 
                            quantity={input.quantity}
                            x={input.relx} 
                            y={input.rely} 
                            scale={scale}
                            key={input.id}
                            />
                        </Link>
                    )
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