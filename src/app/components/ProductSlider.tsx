// ProductSlider.tsx
"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import "./ProductSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomArrowProps {
  onClick?: () => void;
  isVisible: boolean;
}

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

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick, isVisible }) => {
  return (
    <ArrowButton style={{
       left: 30, 
       top: 180, 
       position: "absolute",
       opacity: isVisible ? 1 : 0,
       transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)", 
       }} 
       onClick={onClick}>
      <ArrowBackIosNewIcon fontSize="small" />
    </ArrowButton>
  );
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick, isVisible }) => {
  return (
    <ArrowButton style={{ 
      right: 30,
      bottom: 180,
      position: "absolute",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
      }} onClick={onClick}>
      <ArrowForwardIosIcon fontSize="small" />
    </ArrowButton>
  );
};

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onFavoriteClick: (id: number) => void;
  favorites: Set<number>;
}

const IconWrapper = styled(Box)({
  position: "absolute",
  right: "-60px",
  top: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transition: "right 0.8s ease",
});

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onFavoriteClick,
  favorites,
}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
        <IconWrapper className="icons">
          <FavoriteIcon
            onClick={() => onFavoriteClick(product.id)}
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
      <Typography component="h6" sx={{ mt: 2 }}>
        {product.name}
      </Typography>
      <div className="price-rating">
        <Typography color="text.secondary" sx={{ my: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Rating value={product.rating} precision={0.5} readOnly />
      </div>
      <Button
        className="add-to-cart"
        sx={{
          mt: 2,
          textTransform: "none",
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

const ProductSlider: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Sample product data with unique images for each product
  const products: Product[] = [
    { id: 1, name: 'Gray Overcoat Women', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ' },
    { id: 2, name: "Women's Fashion", price: 140.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/35/2758/3622.jpg?hmac=xIB3RTEGJ59FEnaQOXoaDgwX_K6PHAg57R0b4t7tiX0' },
    { id: 3, name: 'Yellow Casual Sweater', price: 110.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g' },
    { id: 4, name: 'Nike Red', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI' },
    { id: 5, name: 'Silver High Neck Sweater', price: 210.0, rating: 4, imageUrl: 'https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI' },
    { id: 6, name: 'Blue Jeans', price: 130.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI' },
    { id: 7, name: 'White T-Shirt', price: 60.0, rating: 5, imageUrl: 'https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A' },
    { id: 8, name: 'Black Hoodie', price: 100.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE' },
    { id: 9, name: 'Sports Shoes', price: 150.0, rating: 4.5, imageUrl: 'https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg' },
  ];

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

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 1000,
    prevArrow: <PrevArrow isVisible={isHovered} />, 
    nextArrow: <NextArrow isVisible={isHovered} />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      className="slick-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavoriteClick={handleFavoriteClick}
            favorites={favorites}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
