import React from 'react';
import { Stack } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Stack
      direction={'column'}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Stack>
  );
}

export default Layout;
