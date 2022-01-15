import { Pagination } from "@mui/material"
import React from "react"

const PageComponent = (props) => {
    const { count, onChange } = props

    return (
        <Pagination count={count} showFirstButton showLastButton onChange={onChange}/>
    )
}

export default PageComponent