import React, { useEffect, useState } from 'react';
import Delivery from './Delivery';
import deliveriesMock from '../../mocks/deliveriesMock';
import { Box, Typography } from '@mui/material';
import Layout from '../Layout';
import axios from 'axios';

interface DogImage {
  message: string;
}

function DeliveryPage() {
  const [dogImage, setDogImage] = useState({ message: '' } as DogImage);

  // Example of using useEffect to fetch data from an API
  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setDogImage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      {/* Example of using a component from Material UI */}
      <Typography
        variant="h3"
        gutterBottom
      >
        Delivery information
      </Typography>
      <Delivery {...deliveriesMock[0]} />
      {/* Example of displaying data fetched from API */}
      <Typography
        gutterBottom
      >
        Dog image:
      </Typography>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={dogImage.message}
      />
    </Layout>
  );
}

export default DeliveryPage;
