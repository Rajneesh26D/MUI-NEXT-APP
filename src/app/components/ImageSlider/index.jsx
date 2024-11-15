import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots",
    };

    return (
        <Box className={styles.div1}>
            <Box className={styles.div2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8.5}>
                        <Box className={styles.diva}>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <Box key={index} component="div" className={styles.slideContainer}>
                                        <div className={styles.textContainer}>
                                            <h2 className={styles.collectionTitle}>LIFESTYLE COLLECTION</h2>
                                            <h1 className={styles.collectionSubtitle}>WOMEN</h1>
                                            <p className={styles.saleText}>SALE UP TO <span>35% OFF</span></p>
                                            <p className={styles.shippingText}>Get Free Shipping on orders over $99.00</p>
                                            <button className={styles.shopButton}>Shop Now</button>
                                        </div>
                                        <img 
                                            src={image} 
                                            alt={`Slide ${index}`} 
                                            className={styles.sliderImage}
                                        />
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                        <Box className={styles.divb}>
                            <img src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" alt="New Arrivals" className={styles.sideImage} />
                            <Box className={styles.div4}>
                                <Typography variant="h6" sx={{ fontSize: { xs: '1.35rem', sm: '1.35rem', md: '1.5rem' } }}>NEW ARRIVALS</Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.7rem', sm: '2rem', md: '2.5rem' } }}>SUMMER</Typography>
                                <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.5rem' } }}>SALE 20% OFF</Typography>
                                <Link href="#" className={styles.shopNowLink}>
                                    Shop now <ArrowForwardIcon />
                                </Link>
                            </Box>
                        </Box>
                        <Box className={styles.divc}>
                            <img src="https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g" alt="New Arrivals" className={styles.sideImage} />
                            <Box className={styles.div4}>
                                <Typography variant="h6" sx={{ fontSize: { xs: '1.35rem', sm: '1.35rem', md: '1.5rem' } }}>NEW ARRIVALS</Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.7rem', sm: '2rem', md: '2.5rem' } }}>SUMMER</Typography>
                                <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.5rem' } }}>SALE 20% OFF</Typography>
                                <Link href="#" className={styles.shopNowLink}>
                                    Shop now <ArrowForwardIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ImageSlider;
