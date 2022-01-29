import { Paper, Tooltip } from "@mui/material"
import React from "react"
import MemoryIcon from '@mui/icons-material/Memory';

const ItemIcon = (props) => {
    const { item, quantity } = props

    const name = item.localized_name ? item.localized_name : item.unlocalized_name

    return (
        <Tooltip title={name} placement="top">
            <div>
                <MemoryIcon fontSize="large"/>
                {quantity > 1 ? quantity : null}
            </div>
        </Tooltip>
    )
}

export default ItemIcon