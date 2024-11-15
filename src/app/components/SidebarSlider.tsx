// SidebarSlider.tsx
"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import styles from "./SidebarSlider.module.css";
import "./ProductSlider.css";

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

// Custom type for arrow components
interface CustomArrowProps {
  onClick?: () => void;
  isVisible: boolean;
}

// Styled components
const IconWrapper = styled(Box)({
  position: "absolute",
  right: "-60px",
  top: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transition: "right 0.8s ease",
});

const ArrowButton = styled(Box)({
  backgroundColor: "#1e2a38",
  color: "#ffffff",
  width: 30,
  height: 30,
  borderRadius: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
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
    <ArrowButton
      style={{
        left: 30,
        top: 180,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </ArrowButton>
  );
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick, isVisible }) => {
  return (
    <ArrowButton
      style={{
        right: 30,
        bottom: 180,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </ArrowButton>
  );
};

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

const SidebarSlider: React.FC = () => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isHovered, setIsHovered] = useState(false); 

  const products: Product[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Black White Sweater",
    price: 180.0,
    rating: 4,
    imageUrl:
      "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=384&q=75",
  }));

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
    slidesToShow: 4,
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
    <div
      className={styles.container}
    >
      <div className={styles.sidebar}>
        <Typography variant="h6" className={styles.sidebarTitle}>
          Electronic
        </Typography>
        <ul className={styles.sidebarList}>
          {["Wireless Speaker", "Tablet", "Smartphone", "Laptop", "iMac", "Game Controller", "Drone", "Apple"].map((item, index) => (
            <li key={index} className={styles.sidebarItem}>{item}</li>
          ))}
        </ul>
        <Typography variant="body2" className={styles.browseAll}>
          Browse All →
        </Typography>
      </div>
      <Box className={`${styles.sliderContainer} slick-container`}
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
    </div>
  );
};

export default SidebarSlider;
