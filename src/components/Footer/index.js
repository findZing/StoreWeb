
import { Box, Grid, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import LogoCustom from '../LogoCustom';
import { memo } from 'react';



const Container = styled(Box)(({ theme }) => ({

    width: '100%',
    borderTop: '1px solid #ccc',
    paddingTop: '12px',

}))

const GridContainer = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',

}))


const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}))



function Footer() {


    return (
        <Container>
            <GridContainer container spacing={3}>
                <GridItem item xs={6}>
                    <LogoCustom />
                </GridItem>
                <GridItem item xs={6}>
                    <Typography variant="text" fontSize={'3rem'} fontStyle={'italic'}>
                        Copyright (c) by Genious
                    </Typography>
                </GridItem>
            </GridContainer>
        </Container>
    )
}

export default memo(Footer)