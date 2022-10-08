import clsx from "clsx";
import style from './style.module.scss'

import { memo, useRef, useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from 'popmotion'
import {  Box, Button } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const PaginateBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '15px',
    zIndex: '2',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100%',
    
}))

const ItemPaginateBox = styled(Box)(({ theme }) => ({
    backgroundColor: (theme.palette.common.black),
    width: '18%',
    height: '2px',
    border: 'none',
    margin: '0 12px',
    borderRadius: '2px',
}))

const Container = styled(Box)(({ theme }) => ({
    
}))

function ImageCarousel({height, width, imgs, loop = true, normal = true}) {

    
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 img, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 img.
    const imageIndex = wrap(0, imgs.length, page);

    const paginate = (newDirection) => {
        // setPage([page + newDirection, newDirection]);
        setPage(([page , direction]) => {
        
            let newPage = page + newDirection
            if(newPage > imgs.length-1){
                newPage = 0
            }
            else if(newPage < 0) {
                newPage = imgs.length-1
            }
            return [newPage, newDirection]
             
        });
    };

    useEffect(() =>{
        if(loop){
            let time = setTimeout(() => {
                paginate(1)
            }, 2000);
    
            return () => {
                clearInterval(time)
            }
        }
    })

    return (
        <Container className={clsx(style.Main)} sx={{
            height: height === 0 ? '250px' : height,
            maxWidth: width === 0 || width,
            width: '100%',
        }}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={imgs[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className={clsx(style.next)} onClick={() => paginate(1)}>
                <ArrowForwardIosIcon />

            </div>
            <div className={clsx(style.prev)} onClick={() => paginate(-1)}>
            <ArrowBackIosIcon />
            </div>

            {normal && (<div className={clsx(style.GroupBtns)}>
                <div
                    className={clsx(style.Btn)}
                >
                    Miễn phí
                </div>
                <div
                    className={clsx(style.Btn)}
                >
                    Miễn phí
                </div>
                <div
                    className={clsx(style.Btn)}
                >
                    Miễn phí
                </div>
            </div>)}
            {normal && (<PaginateBox>
                <ItemPaginateBox className={clsx({
                    [style.action]: page === 0,
                    [style.blur]: page !== 0,
                })}/>
                <ItemPaginateBox className={clsx({
                    [style.action]: page === 1,
                    [style.blur]: page !== 1,
                })}/>
                <ItemPaginateBox className={clsx({
                    [style.action]: page === 2,
                    [style.blur]: page !== 2,
                })}/>
            </PaginateBox>)}
        </ Container>
    )
}

export default memo(ImageCarousel);