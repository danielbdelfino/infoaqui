import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import MediaCard from '../components/Card';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Headroom from 'react-headroom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BackgroundHeader from '../images/robot_banner.png';
import LogoHeader from '../images/logo_headersmall.png';

export default function MainContainer({ children }) {

  return (
    <div>
      <Headroom
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}
        wrapperStyle={{ marginBottom: 2 }}
        style={{
          background: 'rgb(66, 168, 236)',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
          display: 'flex'
        }}
      >
        <img src={LogoHeader} style={{ 'position': 'absolute' }}></img>
        <Container style={{ padding: 10 }}>
          <ButtonGroup size="large" color="inherit"
            variant="text"
            style={{
              color: 'white',
            }}
            aria-label="text primary button group">
            <Button href="/">Home</Button>
            <Button href="/promocao">Promoções</Button>
            <Button href="/cupons">Cupons</Button>
          </ButtonGroup>
        </Container>
      </Headroom>
      <Container maxWidth="lg">
        <Box my={4}>
          {children}
        </Box>
      </Container>
      <Copyright />
    </div>
  );
}
