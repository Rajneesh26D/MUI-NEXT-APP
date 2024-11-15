// src/app/page.tsx
'use client';

import { Box } from '@mui/material';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import ServiceInfo from './components/ServiceInfo';
import ProductSlider from './components/ProductSlider';
import AddBanner from './components/AddBanner';
import SidebarSlider from './components/SidebarSlider';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

export default function Home() {
  const images = [
    'https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908',
    'https://fastly.picsum.photos/id/51/5000/3333.jpg?hmac=9dZb89mIRt-mPQpI_ScJAxVsNI82SFCGOuiKsvGSchY'
  ];

  return (
    <Box>
      <Header />
      <ImageSlider images={images} />
      <ServiceInfo />
      <ProductSlider />
      <AddBanner />
      <SidebarSlider />
      <ProductSection />
      <Footer />
    </Box>
  );
}
