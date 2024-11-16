// ProductSection.tsx
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { Box, Typography, Button, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import styles from './ProductSection.module.css';
import './ProductSlider.css';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const productData: { [key: string]: Product[] } = {
    newArrivals: [
        { id: 1, name: 'Gray Overcoat Women', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ' },
        { id: 2, name: "Women's Fashion", price: 140.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/35/2758/3622.jpg?hmac=xIB3RTEGJ59FEnaQOXoaDgwX_K6PHAg57R0b4t7tiX0' },
        { id: 3, name: 'Yellow Casual Sweater', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g' },
        { id: 4, name: 'Nike Red', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI' },
        { id: 5, name: 'Silver High Neck Sweater', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI' },
      ],
      bestSeller: [
        { id: 6, name: 'Blue Jeans', price: 130.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI' },
        { id: 7, name: 'White T-Shirt', price: 60.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A' },
      ],
      mostPopular: [
        { id: 8, name: 'Black Hoodie', price: 100.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE' },
        { id: 9, name: 'Sports Shoes', price: 150.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg' },
      ],
      viewAll: [
        { id: 1, name: 'Gray Overcoat Women', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ' },
        { id: 2, name: "Women's Fashion", price: 140.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/35/2758/3622.jpg?hmac=xIB3RTEGJ59FEnaQOXoaDgwX_K6PHAg57R0b4t7tiX0' },
        { id: 3, name: 'Yellow Casual Sweater', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g' },
        { id: 4, name: 'Nike Red', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI' },
        { id: 5, name: 'Silver High Neck Sweater', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI' },
        { id: 6, name: 'Blue Jeans', price: 130.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI' },
        { id: 7, name: 'White T-Shirt', price: 60.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A' },
        { id: 8, name: 'Black Hoodie', price: 100.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE' },
        { id: 9, name: 'Sports Shoes', price: 150.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg' },
      ],
};



const ArrowButton = styled(Box)({
  backgroundColor: "#1e2a38",
  color: "#ffffff",
  width: 30,
  height: 30,
  borderRadius: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transform: "translate(0, -50%) scale(0.8)", 
  transition: "background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
  opacity: 0,
  zIndex: 1,
  "&:hover": {
    backgroundColor: "#343f4f",
  },
});

const IconWrapper = styled(Box)({
  position: "absolute",
  right: "-60px",
  top: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transition: "right 0.8s ease",
});

const PrevArrow = ({ onClick, isVisible }: { onClick?: () => void; isVisible: boolean }) => (
  <ArrowButton style={{
    left: 30,
    top: "50%",
    position: "absolute",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
  }} onClick={onClick}>
    <ArrowBackIosNewIcon fontSize="small" />
  </ArrowButton>
);

const NextArrow = ({ onClick, isVisible }: { onClick?: () => void; isVisible: boolean }) => (
  <ArrowButton style={{
    right: 30,
    top: "50%",
    position: "absolute",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
  }} onClick={onClick}>
    <ArrowForwardIosIcon fontSize="small" />
  </ArrowButton>
);

const ProductSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('newArrivals');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFavoriteClick = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const settings: Settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    prevArrow: <PrevArrow isVisible={isHovered} />,
    nextArrow: <NextArrow isVisible={isHovered} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <Box className={styles.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Header Section */}
      <Box className={styles.header}>
        <Box className={styles.title}>
          <Typography variant="h5" component="h2">
            Selected Products
          </Typography>
          <Typography variant="body2">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Button
            onClick={() => handleCategoryChange('newArrivals')}
            variant="contained"
            className={selectedCategory === 'newArrivals' ? styles.activeButton : styles.inactiveButton}
          >
            New Arrivals
          </Button>
          <Button
            onClick={() => handleCategoryChange('bestSeller')}
            variant="contained"
            className={selectedCategory === 'bestSeller' ? styles.activeButton : styles.inactiveButton}
          >
            Best Seller
          </Button>
          <Button
            onClick={() => handleCategoryChange('mostPopular')}
            variant="contained"
            className={selectedCategory === 'mostPopular' ? styles.activeButton : styles.inactiveButton}
          >
            Most Popular
          </Button>
          <Button
            onClick={() => handleCategoryChange('viewAll')}
            variant="contained"
            className={selectedCategory === 'viewAll' ? styles.activeButton : styles.inactiveButton}
          >
            View All
          </Button>
        </Box>

      </Box>

      <Slider {...settings} className="slick-container">
        {productData[selectedCategory].map((product) => (
          <div key={product.id} className="card">
            <div className="image-container">
              <img src={product.imageUrl} alt={product.name} />
              <IconWrapper className="icons">
                <FavoriteIcon
                  onClick={() => handleFavoriteClick(product.id)}
                  className={`icon ${favorites.has(product.id) ? "active" : ""}`}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "4px",
                    width: "28px",
                    height: "28px",
                    color: favorites.has(product.id) ? "#ff0000" : "#e1dfdf",
                  }}
                />
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "4px",
                    width: "28px",
                    height: "28px",
                    color: "#e1dfdf",
                  }}
                />
              </IconWrapper>
            </div>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">${product.price.toFixed(2)}</Typography>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Button variant="outlined" className="add-to-cart">
              Add To Cart
            </Button>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSection;
