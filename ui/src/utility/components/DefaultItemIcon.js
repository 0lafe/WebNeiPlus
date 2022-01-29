import { Tooltip } from "@mui/material"
import React from "react"
import SettingsIcon from '@mui/icons-material/Settings';

const DefaultItemIcon = ({ item, quantity, x, y, scale }) => {
    const name = item.localized_name ? item.localized_name : item.unlocalized_name

    return (
        <Tooltip title={name} placement="top">
            <div style={{position: 'absolute', zIndex: 100, top: y * scale / 100, left: x * scale / 100}}>
                <SettingsIcon fontSize="large"/>
                {quantity > 1 ? quantity : null}
            </div>
        </Tooltip>
    )
}

export default DefaultItemIcon