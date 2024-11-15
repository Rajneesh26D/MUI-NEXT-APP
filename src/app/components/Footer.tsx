// Footer.tsx
import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.footerContent}>
        <Box className={styles.logoSection}>
          <Box className={styles.logo}>
            <Typography variant="h6" component="span" className={styles.logoText}>
              bazaar
            </Typography>
          </Box>
          <Typography variant="body2" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
          </Typography>
          <Box className={styles.appButtons}>
            <Button variant="contained" className={styles.appButton}>
              <AndroidIcon /> Get it on Google Play
            </Button>
            <Button variant="contained" className={styles.appButton}>
              <AppleIcon /> Download on the App Store
            </Button>
          </Box>
        </Box>

        <Box className={styles.linksSection}>
          <Box className={styles.linkColumn}>
            <Typography variant="h6" className={styles.linkHeader}>About Us</Typography>
            <Link href="#" className={styles.link}>Careers</Link>
            <Link href="#" className={styles.link}>Our Stores</Link>
            <Link href="#" className={styles.link}>Our Cares</Link>
            <Link href="#" className={styles.link}>Terms & Conditions</Link>
            <Link href="#" className={styles.link}>Privacy Policy</Link>
          </Box>

          <Box className={styles.linkColumn}>
            <Typography variant="h6" className={styles.linkHeader}>Customer Care</Typography>
            <Link href="#" className={styles.link}>Help Center</Link>
            <Link href="#" className={styles.link}>Track Your Order</Link>
            <Link href="#" className={styles.link}>Corporate & Bulk Purchasing</Link>
            <Link href="#" className={styles.link}>Returns & Refunds</Link>
          </Box>

          <Box className={styles.linkColumn}>
            <Typography variant="h6" className={styles.linkHeader}>Contact Us</Typography>
            <Typography variant="body2" className={styles.contactInfo}>
              70 Washington Square South, New York, NY 10012, United States
            </Typography>
            <Typography variant="body2" className={styles.contactInfo}>
              Email: uilib.help@gmail.com
            </Typography>
            <Typography variant="body2" className={styles.contactInfo}>
              Phone: +1 1123 456 780
            </Typography>
            <Box className={styles.socialIcons}>
              <Link href="#"><TwitterIcon className={styles.socialIcon} /></Link>
              <Link href="#"><InstagramIcon className={styles.socialIcon} /></Link>
              <Link href="#"><FacebookIcon className={styles.socialIcon} /></Link>
              <Link href="#"><YouTubeIcon className={styles.socialIcon} /></Link>
              <Link href="#"><GoogleIcon className={styles.socialIcon} /></Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
