import React from "react"
import { Link } from "react-router-dom"
import DefaultItemIcon from "@components/DefaultItemIcon"


const HandlerRecipe = ({recipe, url, scale}) => {
  return (
    <div style={{display: 'flex', justifyContent:"center"}}>
      {!url ? 
        <h1>Error no GUI Found</h1>
      :
        <div style={{position: 'relative'}}>
          <img src={require("@src/assets/gui/" + url)} width={1000}/>
            {recipe.inputs.map((input, index) => {
              return (
                <Link to={`/recipes/items/${input.item.id}`} key={`${recipe.id}-${input.id}:${index}`}>
                  <DefaultItemIcon 
                  item={input.item} 
                  quantity={input.quantity}
                  x={input.relx} 
                  y={input.rely} 
                  scale={scale}
                  />
                </Link>
              )
            })}
            {recipe.outputs.map((output, index) => {
              return (
                <Link to={`/recipes/items/${output.item.id}`} key={`${recipe.id}-${output.id}:${index}`}>
                  <DefaultItemIcon 
                  item={output.item} 
                  quantity={output.quantity}
                  x={output.relx} 
                  y={output.rely} 
                  scale={scale}
                  />
                </Link>
              )
            })

            }
        </div>
        }
    </div>
  )
}

export default HandlerRecipe