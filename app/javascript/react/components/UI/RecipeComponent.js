import React from "react"
import ItemGrid from "./ItemGrid"
import { Grid, Paper, styled } from "@mui/material"
import ItemIcon from "./ItemIcon";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RecipeComponent = (props) => {
    const { recipe } = props

    const ItemBox = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div style={{display: 'flex', justifyContent:"center", paddingBottom: 30}}>
            <Grid container columnSpacing={2} alignItems="center">
                <Grid item>
                    <ItemGrid items={recipe.formatted_inputs}/>
                </Grid>
                <Grid item>
                    <ItemBox sx={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'gray',
                                display: "flex",
                                justifyContent:"center", 
                                alignItems: "center"
                            }}>
                        <ArrowForwardIcon />
                    </ItemBox>
                </Grid>
                <Grid item>
                    <ItemBox sx={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'gray',
                                display: "flex",
                                justifyContent:"center", 
                                alignItems: "center"
                            }}>
                        <ItemIcon name={recipe.outputs[0].item.localized_name ? recipe.outputs[0].item.localized_name : recipe.outputs[0].item.unlocalized_name}/>
                        {recipe.outputs[0].quantity}
                    </ ItemBox>
                </Grid>
            </Grid>
        </div>
    )
}

export default RecipeComponent