import Typography from '@mui/material/Typography';

//constants - text
const headerText = "BREWDOG BEERS"

/**
 *Header for Brewdog beers
 *
 */
function Header(){
    return(
        <Typography 
            variant="h2" 
            mb={14} 
            borderBottom="5px solid gray" 
            mx={6} mt={2} 
            fontWeight='bold' 
            letterSpacing={10}        
        >
            {headerText}
        </Typography>
    )
}

export default Header;