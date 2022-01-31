import React, { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { getRecipeById, getRecipeTypeById } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'

const Handlers = () => {
    const { id } = useParams()
    const [recipes, setRecipes] = useState([])
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null)

    useEffect(() => {
        getRecipeTypeById(id, page, limit).then(response => {
            setData(response.data)
        })
    }, [])

    useEffect(() => {
        getRecipeById(id, page, limit).then(response => {
            setRecipes(response.data.recipes)
        })
    }, [page])

    return (
    !data ? null :
    <Fragment>
        <TopBanner name={data.name}/>
        <PaginationBar count={Math.ceil(data.quantity/limit)} onChange={(value) => setPage(value)}/>
        {recipes.map(recipe => {
            return <HandlerRecipe key={recipe.id} recipe={recipe} url={data.gui_url} scale={data.scale}/>
        })}
    </Fragment>
    )
}

export default Handlers