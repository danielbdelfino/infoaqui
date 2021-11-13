import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import MainContainer from '../components/MainContainerv2';

export default function Cupons() {
  return (
    <MainContainer>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Cupons aqui!!
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </MainContainer>
  );
}