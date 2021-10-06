import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { hasLactose, isDryHopped } from '../Utils/BeerUtils';
import { Grid, Box, Tooltip, Typography } from '@mui/material';

//Constants - Text
const lactoseTitle = "Contains Lactose";
const dryHoppedTitle = "Dry Hopped";

/**
 * Displays a list of brew dog beers including the following information
 *   - name
 *   - tagline
 *   - image
 *   - ABV
 *   - IBU
 *   - is dry hopped
 *   - has lactose 
 *
 * @param beerData - json object with beer data sorted by ABV.  M
 *                         more information on structure here - "https://api.punkapi.com/v2/beers?per_page=80"
 * @return react component displaying beer data 
 */
function BeerInfo({beerData}){
  
    /**
     *shows a warning icon if the beer includes lactose
     *
     * @param {*} beer - beer to check
     */
    const lactoseWarning = (beer) =>{
        if(hasLactose(beer)){
            return(
                <Tooltip title={lactoseTitle} arrow>
                    <WarningAmberOutlinedIcon color="warning"></WarningAmberOutlinedIcon>
                </Tooltip>
            )
        }
        else{return null;}
    }

    /**
     *Show an info icon if the beer includes dry hops
     *
     * @param {*} beer - beer to check
     */
    const dryHoppedInfo = (beer) => { 
        
        if(isDryHopped(beer)){
            return(
                <Tooltip title={dryHoppedTitle} arrow>
                    <InfoOutlinedIcon color="info"></InfoOutlinedIcon>
                </Tooltip>
            );
        }

        else{return null;}
    }

    return(
        <Box className='outer_box'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {beerData.map((beer) => (
                    <Grid item xs={2} sm={4} md={4} borderBottom="1px solid grey" key={beer.id}>
                        <Box  textAlign="center">
                            <div className='beer_image_div'>
                                <img src={beer.image_url} alt={beer.name} className='beer_image'/>
                            </div>
                            <Typography variant="h6" gutterBottom>{beer.name} </Typography>
                            <Typography variant="body1" >{beer.tagline}</Typography>
                            <Typography variant="body2" mb={4} color="gray">
                                {beer.abv}% ABV | {beer.ibu} IBU {dryHoppedInfo(beer)} {lactoseWarning(beer)}
                            </Typography>                                          
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

BeerInfo.propTypes = {
    beerData: PropTypes.array,
};

export default BeerInfo;