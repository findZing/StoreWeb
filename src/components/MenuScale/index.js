
import { memo, useState } from 'react'

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Collapse,

} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { styled, alpha } from '@mui/material/styles';

import { MENU_SCALE_PROPERTIES } from '../../constants';

const ListContainer = styled(List)(({ theme }) => ({
    maxWidth: MENU_SCALE_PROPERTIES.WIDTH,
    width: '100%',
    // width: MENU_SCALE_PROPERTIES.WIDTH,
    backgroundColor: theme.palette.common.white,
    borderRadius: MENU_SCALE_PROPERTIES.BORDER_RADIUS,
    fontSize: '2rem',

   padding: '0',
   
}))

function MenuScale() {
    const [openList, setOpenList] = useState({
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true,
        '10': true,

    })

    const listOptions = [
        ['1','Thực phẩm tươi sống', 'Cá', 'Thịt'],
        ['2','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['3','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['4','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['5','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['6','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['7','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['8','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['9','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
        ['10','Đồ gia dụng', 'Quạt', 'Bóng đèn'],
    ]

    function handleClick(anchor, _open) {
        setOpenList({ ...openList, [anchor]: !_open })

    }

    function showListOptions() {

        return listOptions.map((options, index) => {
            return (
                <ListContainer key={index}>
                    <ListItemButton onClick={() => handleClick(options[0], openList[options[0]])} sx={{padding: '4px 8px'}}>
                        <ListItemText primary={options[1]}    primaryTypographyProps={{fontSize: '1.4rem', fontWeight: '500'}} />
                        {openList[options[0]] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openList[options[0]]} timeout="auto" unmountOnExit>
                    
                        <List component="div" disablePadding>
                                
                                {
                                    options.map((option, index) => {
                                        if(option !== options[0] && option !== options[1]){
                                            return (
                                                <ListItemButton key={index} sx={{padding: '4px 24px'}}>
                                                    <ListItemText primary={option}     primaryTypographyProps={{fontSize: '1.2rem'}} />
                                                </ListItemButton>
                                            )
                                        }
                                    })
                                }

                        </List>
                    </Collapse>
                </ListContainer>
            )
        })
    }
    return (
            <ListContainer
                component="nav"
            >
                {showListOptions()}
                
            </ListContainer>
    )
}

export default memo(MenuScale)