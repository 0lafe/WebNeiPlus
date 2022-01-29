import React from "react"
import { Link } from "react-router-dom"
import DefaultItemIcon from "@components/DefaultItemIcon"


const HandlerRecipe = ({recipe, url, scale}) => {
  return (
    <div key={recipe.id} style={{display: 'flex', justifyContent:"center"}}>
      {!url ? 
        <h1>Error no GUI Found</h1>
      :
        <div style={{position: 'relative'}}>
          <img src={require("@src/assets/gui/" + url)}/>
            {recipe.inputs.map(input => {
                return (
                  <Link to={`/items/${input.item.id}`}>
                      <DefaultItemIcon 
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
        }
    </div>
  )
}

export default HandlerRecipe