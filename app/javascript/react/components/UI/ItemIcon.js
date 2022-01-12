import { Paper, Tooltip } from "@mui/material"
import React from "react"
import MemoryIcon from '@mui/icons-material/Memory';

const ItemIcon = (props) => {
    const { name } = props

    return (
        <Tooltip title={name} placement="top">
            <MemoryIcon fontSize="large"/>
        </Tooltip>
    )
}

export default ItemIcon