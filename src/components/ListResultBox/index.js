
import { 
    Box,
    List,
    ListItemButton,
    ListItemText,

} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import clsx from "clsx";
import { memo } from 'react';
import style from './style.module.scss' 

const ContainerBox = styled(Box)(({ theme }) => ({
    border: 'none',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    width: '400px',
    // position: 'absolute',
    margin: '80px auto ',
    border: '1px solid #000'
}))

const ContainerList = styled(Box)(({ theme }) => ({
    height: '100%',

}))

const ListItemCustom = styled(ListItemButton)(({ theme }) => ({
    height: '50px',

}))

function ListResultBox() {
    const listResults = [1,2,3,4,5,6,7,8,9,10]

    function showListResults() {
        return listResults.map((result, index) => {
            return (
                <ListItemCustom>
                    <ListItemText primary={result} sx={{
                        '& .MuiTypography-root':{
                            fontSize: '1.6rem !important'
                        }
                    }}/>
                </ListItemCustom>
            )
        })
    }
    return (
        <ContainerBox sx={{
            height: listResults.length > 5 ? '250px' : listResults.length * 50 + 'px',

        }}>
            <ContainerList className={clsx({
                [style.Scroll]: listResults.length > 5 ? true : false
            })}>
                <List>
                    {showListResults()}
                </List>
            </ContainerList>
        </ContainerBox>
    )
}

export default memo(ListResultBox)