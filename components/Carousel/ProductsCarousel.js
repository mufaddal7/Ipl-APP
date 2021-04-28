import { StylesProvider } from "@material-ui/styles";
import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import ProductCard from "./../Cards/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    bottom: {
        marginTop: '18px',
        overflow: 'auto',
        width: '100%',
        marginBottom: '18px',

    },
    arrows: {
        float: 'right',
        display: 'flex',
        marginRight: '40px',
        [theme.breakpoints.down('sm')]: {
            float:'none',
            margin:'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        },
    },
    dots: {
        float: 'left',
        display: 'flex',
        marginLeft: '40px',
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },
    },
    arrowPrev: {
        margin: '2px',
        marginRight: '30px',
        height:'fit-content',
        cursor:'pointer'
    },
    arrowNext: {
        margin: '2px',
        height:'fit-content',
        cursor:'pointer'
    },
    dotPrev: {
        margin: '2px',
        marginRight: '12px',
        height:'fit-content',
        cursor:'pointer'
    },
    dotNext: {
        margin: '2px',
        height:'fit-content',
        cursor:'pointer'
    }

}))

export default function ProductCarousel(props) {
    const sliderRef = useRef();

    const styles = useStyles()
    const gotoNext = () => {
        sliderRef.current.slickNext();
    }
    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 973,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //centerMode: true,

                }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <Slider ref={sliderRef} {...settings}>
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />
                <ProductCard rating='4.5' name={`${props.name ? props.name :'Hair fall Control Shampoo ' } `} />

            </Slider>

            <div className={styles.bottom}>
                <div className={styles.dots}>
                   
                <div onClick={gotoPrev} className={styles.dotPrev}>
                        <img src='/dotop.png' />
                    </div>
                    <div onClick={gotoNext} className={styles.dotNext}>
                        <img src='/dottr.png' />
                    </div>
                </div>
                <div className={styles.arrows}>

                    <div onClick={gotoPrev} className={styles.arrowPrev}>
                        <img src='/arrowprev.png' />
                    </div>
                    <div onClick={gotoNext} className={styles.arrowNext}>
                        <img src='/arrownext.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}