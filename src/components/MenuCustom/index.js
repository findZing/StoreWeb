
import { memo, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import style from './style.module.scss';

import {
    AppBar,
    Toolbar,
    TextField,
    Box,
    IconButton,
    Badge,
    SwipeableDrawer,
    Typography,

} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';

import LogoCustom from '../LogoCustom';
import { MENU_PROPERTIES } from '../../constants';
import { MENU_SCALE_PROPERTIES } from '../../constants';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountCircle } from '@mui/icons-material';


import MenuScale from '../MenuScale'
import ListResultBox from '../ListResultBox';

import { width } from '@mui/system';
import { createSearchParams, Navigate, useNavigate } from 'react-router-dom';

const ContainerMenu = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    zIndex: '10',
}))

const AppBarCustom = styled(AppBar)(({ theme }) => ({
    height: MENU_PROPERTIES.HEIGHT,
    boxShadow: 'none',
    borderBottom: '1px solid #ccc',

    backgroundColor: '#008848',
}))


const ToolBarCustom = styled(Toolbar)(({ theme }) => ({
    height: `${MENU_PROPERTIES.HEIGHT} !important`,
    maxWidth: MENU_PROPERTIES.MAX_WIDTH,
    width: '100%',

    margin: '0 auto',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',



}))


const SearchBox = styled(TextField)(({ theme }) => ({
    color: theme.palette.common.black,

    maxWidth: '400px',
    width: '100%',
    height: MENU_PROPERTIES.HEIGHT,
    justifyContent: 'center',

    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',
        color: 'black',
        '&.Mui-focused fieldset': {
            borderColor: 'white',

        }
    }

}))


const ControllerBox = styled(Box)(({ theme }) => ({

    flexDirection: 'row',
    color: 'black',
    width: '140px',
    justifyContent: 'center',
}))


const ControllerBoxMobile = styled(Box)(({ theme }) => ({

    flexDirection: 'row',
    color: 'black',
}))


function MenuCustom() {
    const [isOpenSearchBox, setOpenSearchBox] = useState(false)
    const [isOpenMenuScale, setOpenMenuScale] = useState(false)

    const navigate = useNavigate()
    const params = { name: '' }
    const [searchParams, setSearchParams] = useState('')

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md')) // return true if the width screen is bigger than 'md'

    const searchBox = useRef(null)

    function handleOpenSearch() {
        setOpenSearchBox(!isOpenSearchBox)
    }

    
    const onChangeSearch = (e) => {
        setSearchParams(e.target.value)
    }

    const handleGotoSearch = (e) => {
        console.log(e.key)
        if(e.key === 'Enter') {
            console.log('Goto')
            e.preventDefault()
            params.name = searchParams
            navigate({
                pathname: '/search',
                search: `?${createSearchParams(params)}`,
              });
        }
    }
    const handleClickCart = () => {
        navigate('/cart')
    }

    const toggleMenuScale = () => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpenMenuScale(!isOpenMenuScale)

    }


    useEffect(() => {
        if (matches && isOpenSearchBox) {
            handleOpenSearch()
        }
    }, [matches])

    useEffect(() => {
        // Active when Component is rendered
        if (isOpenSearchBox) {
            searchBox.current.querySelector('input').focus()
        }

    })

    return (
        <ContainerMenu>
            <AppBarCustom>
                <ToolBarCustom>
                    <ControllerBoxMobile sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            controls='primary-search-account-menu-mobile'
                            aria-haspopup="true"
                            color="inherit"
                            onClick={toggleMenuScale()}
                        >
                            <MenuIcon sx={{
                                fontSize: '2.4rem',

                            }} />
                        </IconButton>
                        <SwipeableDrawer
                            anchor='left'
                            open={isOpenMenuScale && !matches}
                            onClose={toggleMenuScale()}
                            onOpen={toggleMenuScale()}
                            sx={{ width: '100%', height: '100%' }}
                        >
                            <MenuScale />
                        </SwipeableDrawer>
                    </ControllerBoxMobile>

                    {isOpenSearchBox ?
                        <SearchBox id="outlined-basic" variant="outlined" placeholder='Search'
                            ref={searchBox}
                            value={searchParams}
                            onChange={onChangeSearch}
                            onKeyUp={handleGotoSearch}
                            inputProps={{
                                style: {
                                    fontSize: '1.4rem',
                                    padding: '8px 12px',
                                    border: '2px solid rgba(255, 255, 255, 1)',
                                    borderRadius: '4px',

                                },

                            }}
                        /> : <LogoCustom to='/' />}

                    <ControllerBoxMobile sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            controls='primary-search-account-menu-mobile'
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => { handleOpenSearch() }}
                        >
                            <SearchIcon sx={{
                                fontSize: '2.4rem',

                            }} />
                        </IconButton>
                    </ControllerBoxMobile>

                    <SearchBox id="outlined-basic" variant="outlined" placeholder='Search'
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                        value={searchParams}
                        onChange={onChangeSearch}
                        onKeyPress={handleGotoSearch}

                        inputProps={{
                            style: {
                                fontSize: '1.4rem',
                                padding: '8px 12px',
                                border: '2px solid rgba(255, 255, 255, 1)',
                                borderRadius: '4px',

                            },

                        }}
                    />
                    <ControllerBox
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <IconButton color='inherit' onClick={handleClickCart}>
                            <Badge badgeContent={4} color='success'>
                                <ShoppingCartIcon sx={{
                                    fontSize: '2.4rem',

                                }} />
                            </Badge>
                        </IconButton>

                        <IconButton color='inherit'>
                            <AccountCircleIcon sx={{
                                fontSize: '2.4rem',

                            }} />
                        </IconButton>
                    </ControllerBox>
                </ToolBarCustom>
            </AppBarCustom>
            {/* {showMenuScaleBox()} */}
            {/* <ListResultBox /> */}
        </ContainerMenu>
    )
}

export default memo(MenuCustom)