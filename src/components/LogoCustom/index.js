
import { styled, alpha } from '@mui/material/styles';
import { memo } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { MENU_PROPERTIES } from '../../constants';

const logo = 'https://brademar.com/wp-content/uploads/2022/05/Gymshark-Logo-PNG-1.png'

const Container = styled(NavLink)(({ theme }) => ({
    // backgroundImage: `url(${logo})`,
    width: '140px',
    height: MENU_PROPERTIES.HEIGHT,

    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',

    cursor: 'pointer',
    fontSize: '3rem',
    textDecoration: 'none',
    color: theme.palette.common.black,
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    padding: '0'
}))

function LogoCustom() {
    const navigate = useNavigate()

    const handleClick = () => {}
        navigate('/')
    return (
        <Container onClick={handleClick}>Grocery</Container>
    )
}

export default memo(LogoCustom)