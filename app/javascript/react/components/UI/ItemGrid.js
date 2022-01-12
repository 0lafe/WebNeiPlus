import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from "@mui/material"
import React from "react"
import ItemIcon from "./ItemIcon"

const ItemGrid = (props) => {
    const { items } = props

    const ItemBox = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            {items.map(row => {
                return (
                    <Grid container columnSpacing={2} style={{paddingBottom: 10}} >
                        {row.map(item => {
                            return (
                                <Grid item>
                                    <ItemBox sx={{
                                        width: 100,
                                        height: 100,
                                        backgroundColor: 'gray',
                                        display: "flex",
                                        justifyContent:"center", 
                                        alignItems: "center"
                                    }}>
                                        {item && 
                                        <div>
                                            <ItemIcon name={item.item.localized_name ? item.item.localized_name : item.item.unlocalized_name}/>
                                            {item.quantity}
                                        </div>}
                                    </ItemBox>
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            })}
        </div>
    )
}

export default ItemGrid