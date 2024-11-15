import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './ServiceInfo.css';

interface CategoryCard {
  title: string;
  imageUrl: string;
}

const ServiceInfo = () => {
  // Category data
  const categories: CategoryCard[] = [
    {
      title: 'Toys',
      imageUrl: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Sports',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABMEAABAwMBAwYKBgUICwAAAAAAAQIDBAUREgYTIQcUMUFRoRUiMlRhgZGxwdEjM1JTcaIWJEJikkRkcoKTstLhFyU1VVZjc3SU4vD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5vaXbCg2fnZTztklqHpq3cePFTtVVA6QHCV/KVa4ooXUUEk8j0VXse7RusL0KvFFX8C3U8ptubSRupoHS1WrTLCr0RIlxniuOOcp0dwHfg4B/Kfb20KuSnctciojqfVwRFz42rHRwXhjJuNkdrYdonSR7jcVDE1adepHN6MovDrA6cAAAAAAAAAAAAAAAAGFd7hDa7dPW1OVjhblUb0uXqRPWcXbeUygmfL4QplpYWNc7eo/WiY7UwgEgg4C38ptFVV+5qKR0FNnhMkmpWp2qmOgUnKdQVFc2LmkjaVyojZkkRVwvQunHR6wO/BxlLyi2WquDaVqTJG52ltQ5E0L6enOPTg7FOoD0AABBdWxNp9r9q6mSR27t0b1jRvW5qo1vchKl+2usthbK2tuFOtXEjf1Rsrd87VjGGZz1ov4cSI+T6qWlrLs+VEclwoKypk6/JcqoBqtiKKO9rdVkc5WUlG+oZjrkcupPeedhKKK/bRSUkznbpG1FQ/T1rlUb8DbckD/B94pon6VSspJ1enoYvi+41fJS9bbfLPUZb+vT83VP3NCZ/MBY2XpG3jbeK2Tq5I5ahElx06WsTh7cne8n7OZ7S7rjhsr40z048ZPkpxFslW37eV1zZhNF6fC1F7HSyIvdj2EkMRsHKFUNY3S3whGzCemFjvfn2gSUAAAAAAAAAAAAAAADk+Ul6ps6sX3j/c1y+9EIgs1tiuOx90uLXOWoiqFgVE6FYrVT3kscpT9NHQx/eSPT8ikeclUix1U1lkRrobjSSSqjvtJqT3KBptjKJtz2duFfqVaikfCmP2Va5PG/+9Bb2HoGV9vurkVy1FtgYsTU68OVHZ9SIbHkbq+ZXOhpJfHgujHNc1ejLGpgx+Tio8B7VIzP0VTcZaKVF7EXKd4FrZW38+jvyI92+t6byJE627x2U/HGPYT3szUrV7P2+dyqrnwN1KvaiYXvQhbZufwDyl3WJUbuKi7PpHMXo0q7U35EiWfa+zWiatslfO2lkoZ5EarkXD2LI5Uxw6kVEA7kGB4YtvncXtAEYLSbGXG81V5luU9Zcq1kytpp8OY17Y1cmMN4aWxrhcqnDHYRvsvdXMSd7np9HY6pjc/aVi4T2qh11RslZ0VXULG0tVT6nKsS5V2Gq1Wr6FycBPaJKSlqZGSeIyF+E7UVANzsJdGsv9DLI/QyGiqkz/UevxQwNh65PDOzcbnaWQV6K5exFcnyLEFnlp3LIyTxWRv729B4tFoerKOaJ+nyZfWBfqK9JbzXNjd4r7ws2r0LI4k6suUv6WVVZSLTOSW6xRwb3ON5phblccUTC9JEtFaZKlskjZNKundn1OOgShpn1Ea3JmqLnCa11Lwzo/zAm2kv1+dTyyvordUaJ3w6oJ3MTU1cL0ovX6S54fvuWp4FplymfFrU+RGtM23W2Bk1ggXLnq2RUVy/EzI7tcF47leH7qgd+t+vqLxskGMeep8jJp75XP8ArqGnjXPRznPwI6ddK16+NH+VT2y41OPGhz2LpUCSWXK4vXLKSl0+moVM/lPS3C5eZ0v/AJK/4SOoLvUxuxu3d5fW8VOF8Ve8DvXXGvRFVKKBVTsn/wAjGmu94arljttLIjernWF72nCy3qsciNa33mO67XD7Kd4Hduv17TostPlP56nyPC7QX7rsdPj/AL5vyOBddbhn6v3mPPda/j9Gv8KgSIu0t4Z9ZaKZifvVf/qW37V3RMYttCqKirjnq8PykXz19a7isfD+iprZKyoe9rXRv0q5EXgqAd5t1c7rVWmgr6qKgZCs6sY2GRznNVV0rnKJ0YX2nA7AXNkW2Vmle9Gxx72Nyr2Yd80MS5wWJtXPDTRNWdPIaj3Kucp6e0waazyxzwzRvwjVVyJ+IF/Ye5NZtHs/Jq0xwVjsr2IqoUW4I3aebdu8Rl/fMjvQr+BrLPa5JWUtSx3DUr+/HwKxWyWaaqfG7H649PYqgb3aW4Ndt3c3wu8TwvHMi+wlObZnZrae4zTVM8kVwqqmVY3wyeNKxiNzhFynDU3uITntc9VcqpzHYVsrEcvpRqL8TtrdYblI6nuNNfp6FYmvY3ddKK7GpUVe3CexAO+/0VWz/e14/tIv8AOW5rtB/wAb3D8oAu7ZWKtse1t0vVPb8WyoY1FnZpRGufpRcpnPl56v2jjL1/sus/6L/cp9KzwxzxOimY17HJxa5MofM94dumVtPI7Coj414p04VAL6rmiX0xKvcY9hX/VtG7/loWKGsY63QZcnGJEX2YMfZ2qR1rgYrvGZlveBk2Jf1adv2aiRPzHebFRI6vpNTGuTnyI7V2aWKnehHlinxNXRauPOnu9Sklcnrt5XwM/nDXd2fgBLzI2MT6NiNT0Jg9gAAAAAAAAAAAAAAHB8pFO1sltfDExqufLvHI1EXGEX34IqYuIkXsT4Eu8pf0dBTy/ZSX+6nyIVqalsdJIurojcvcoHjZxNNppP6HxUrZOLKlftVUv95SxYqpjLdTN1JlrEyW9m52uo0VXeVI9V9blAz6DjX3BejNRj8jSQNm6aprqBI6SF0jo1y7GOGc/Ijm1zI99W5Olal/vwfQGwdMyDZihc2NrXyR63OROLsqqplevgoFj9Gv36f+zQHUgCxzuD75n8R8v8rNJNa9rrhBGv6tUyLPE5OhzX8eH4LlPUS5PsHcX+RdZW+35nPbQcmNxromxS3PVhc5fHqVPw48AISSoqGRtaxzmxr0ekQzT0rWyM1Na5VRq9S47Pb3krSckNzlpIqZ92jWKNfo0WLoz2cT2vJHcpaKOkfdo1hjcrmN3PkqvrAjCgqp4KrnTmru5H4c9U4Kv4+vvJn5I3b+9JjiyNiyKvqVPe418XJDOtItJNeFWn3mtEbEnlduc9PVk7rY7ZBmz9MsFPUSSasapH41L7EA7retG9aa1tBJ9889cwk84eBsN60b1pr/B8nnDyvg+XziQDP3rRvmmv8HSecSlFtsnnEoGw3zRv2GtW2yecSnhbVIv8olA2vOI/tFOcxfbQ0zrPKvDnUpadY5/OpQN9zmD7xpRaqDH1jTmZdmp3/wAsl/iMGfY+qfnRcZ0/rKB75Vpo/wBFJZo1R6xPRFx1I5FT4ofM1fWT1Mzo2OcrURUwnHKJ0k/3PYC4zU8rPC0mlyKioqqufVk5Cm5IrlSSulp7nG1zkVquWLoz0onECJqaeoYm7g1Ln9kv2qslpp2omVRV6CUaHkiudDUb+C6xtkRFRHJFxTKY4cew92/khr6GdKiK6MbIiLhyReTlMcOIHD7JrPVz7mNqvfNJ4rU6Vc5T6rtdMlDbqWkTH0ELI/YiEX7F8nj9nK9altS2Z718p8SJp6uHYSHHR1OPrnfxAbjINXzSf7xwA2Tk4Ka+oZqXJsX9CmLI0DC0DQZOgaAMfQZdNHjB5RhkwtAuoVAAAAAAAAAAAAAAALNSmWmvdHxNo9MopivYBiaCugyEYV0AWY48KhsI08VCw1hkt8lAKgAApZe0vHlQLO7K7su4GALSR4UutQFUAqAAAAAAAAAAAAAAAAW3NLhQC2jArS5gpgA1p6KIVAAAAUKgCgKgCmCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k='
    },
    {
      title: 'Gaming',
      imageUrl: 'https://media.istockphoto.com/id/1399616687/vector/gamepad-game-controller-or-joystick-icon-flat-design.jpg?s=612x612&w=0&k=20&c=tOtiiw2tb1r1rKVsI-jZYdscYpikVgtJxVHn9T6vbVM='
    },
    {
      title: 'Furniture',
      imageUrl: 'https://media.istockphoto.com/id/1430336379/vector/modern-black-sofa.jpg?s=612x612&w=0&k=20&c=3FolTsiY2xLcSKWedD5LbgOzUJ_z5coCl72lAoPHFJE='
    },
    {
      title: 'Fashion',
      imageUrl: 'https://media.istockphoto.com/id/874045548/vector/shirt-icon.jpg?s=612x612&w=0&k=20&c=ZJCxsCczemu1XhYRMDCByrYdwotBESuFdC5tkGf1a6g='
    },
    {
      title: 'Cameras',
      imageUrl: 'https://media.istockphoto.com/id/1350494032/vector/camera-icon-vector-design.jpg?s=612x612&w=0&k=20&c=fQReG30Tc7Nhsbcf2N2r38tJX5cah7sodL5nk4sN-gQ='
    }
  ];

  return (
    <div className="parentContainer">
      <Box className="innerContainer">
        <Box className="serviceItem">
          <LocalShippingIcon fontSize="large" />
          <div>
            <Typography variant="h6">Fast Delivery</Typography>
            <Typography variant="body2" className="priceText">Start from $10</Typography>
          </div>
        </Box>
        <Box className="serviceItem">
          <AttachMoneyIcon fontSize="large" />
          <div>
            <Typography variant="h6">Money Guarantee</Typography>
            <Typography variant="body2" className="priceText">7 Days Back</Typography>
          </div>
        </Box>
        <Box className="serviceItem">
          <AccessTimeIcon fontSize="large" />
          <div>
            <Typography variant="h6">365 Days</Typography>
            <Typography variant="body2" className="priceText">For free return</Typography>
          </div>
        </Box>
        <Box className="serviceItem" sx={{ borderRight: 'none' }}>
          <CreditCardIcon fontSize="large" />
          <div>
            <Typography variant="h6">Payment</Typography>
            <Typography variant="body2" className="priceText">Secure system</Typography>
          </div>
        </Box>
      </Box>

      
      <Box className="categorySection">
        <Box className="categoryContainer">
          {categories.map((category, index) => (
            <Box key={index} className="categoryCard">
              <div className="imageWrapper">
                <img src={category.imageUrl} alt={category.title} loading="lazy" />
              </div>
              <div className="titleOverlay">
                <Typography variant="h6">{category.title}</Typography>
              </div>
            </Box>
          ))}
        </Box>
      </Box>

     
      <Box className="main-container">
        <Typography variant="h3" className="sale-header">Black Friday Sale!</Typography>
        <Box className="text-wrapper">
          <span className="slide-text">
            Pay only for <span className="slide-text-bold">your loving electronics</span>
          </span>
        </Box>
        <Box className="btn-shop">
          <Button variant="contained" className="shop-now-btn">
            Shop Now <span className="css-w0pj6f" />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ServiceInfo;