import React, { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { getHandlerRecipesById, getHandlerInfo, getItemRecipesByID, getItemInfo } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'

const Handlers = ({ extra }) => {
    const { id } = useParams()
    const [recipes, setRecipes] = useState([])
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)
    const [quantity, setQuantity] = useState(0)
    const [data, setData] = useState(null)
    const [itemData, setItemdata] = useState(null)
    const [handler, setHandler] = useState(null)

    useEffect(() => {
        if (extra === "recipes") {
            getHandlerInfo(id).then(response => {
                setData(response.data)
                setQuantity(response.data.quantity)
            })
        } else {
            getItemInfo(id).then(aResponse => {
                setItemdata(aResponse.data.item)
                setHandler(Object.keys(aResponse.data.item.handler_ids)[0])
                setQuantity(Object.values(aResponse.data.item.handler_ids)[0])
                getHandlerInfo(Object.keys(aResponse.data.item.handler_ids)[0]).then(bResponse => {
                    setData(bResponse.data)
                })
            })
        }
    }, [])

    useEffect(() => {
        if (extra === "recipes") {
            getHandlerRecipesById(id, page, limit).then(response => {
                setRecipes(response.data.recipes)
            })
        } else {
            getItemRecipesByID(id, page, limit, handler).then(response => {
                setRecipes(response.data.recipes)
            })
        }
    }, [page])

    return (
    !data ? null :
    <Fragment>
        {/* <TopBanner handlers={data.name}/> */}
        <PaginationBar count={Math.ceil(quantity/limit)} onChange={(value) => setPage(value)}/>
        {recipes.map(recipe => {
            return <HandlerRecipe key={recipe.id} recipe={recipe} url={data.gui_url} scale={data.scale}/>
        })}
    </Fragment>
    )
}

export default Handlers