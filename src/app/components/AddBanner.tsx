// components/AddBanner.tsx
import React from 'react';
import Image from 'next/image';
import styles from './AddBanner.module.css';
import { Box, Typography, Link } from '@mui/material';

const banners = [
  {
    title: "NEW ARRIVALS",
    subtitle: "SKI CLOTHES SALE",
    description: "Up to 35% Off",
    linkText: "Shop Now →",
    imageUrl: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
  },
  {
    title: "BEST SELLER",
    subtitle: "TRENDING WOMEN",
    description: "SUNGLASSES",
    linkText: "Shop Now →",
    imageUrl: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "NEW LATEST BAG",
    description: "COLLECTION",
    linkText: "Shop Now →",
    imageUrl: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
  },
];

const AddBanner: React.FC = () => {
  return (
    <Box className={styles.cardContainer}>
      {banners.map((banner, index) => (
        <Box key={index} className={styles.card}>
          <Box className={styles.cardImage}>
            <Image
              src={banner.imageUrl}
              alt={banner.subtitle}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Box>
          <Box className={styles.cardOverlay}>
            <Typography variant="subtitle2" component="h3" className={styles.title}>
              {banner.title}
            </Typography>
            <Typography variant="h5" component="h2" className={styles.subtitle}>
              {banner.subtitle}
            </Typography>
            <Typography variant="body1" className={styles.description}>
              {banner.description}
            </Typography>
            <Link href="#" className={styles.shopNow}>{banner.linkText}</Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AddBanner;
