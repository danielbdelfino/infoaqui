import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import { Link } from 'gatsby-theme-material-ui';
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
import MainContainer from '../components/MainContainer';

export default function Index() {
  const [contents, setContents] = useState([{ link: '', link_image: '', title: '' }]);
  // const [init, setInit] = useState('');

  async function games() {
    // const apiUrl = 'http://localhost:3000/games'
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => console.log('This is your data', data))

    await axios.get(`http://localhost:3000/games`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.results);
      setContents(res.data.results);
    })
  };

  useEffect(() => {
    games();
  }, []); //o parâmetro com array vazio faz com que o useEffect() seja executado apenas uma vez

  // setInit('start');

  // const GridContent = (props) => {
  //   return (
  //     <Grid content item xs={12} sm={3}>
  //       <MediaCard props={content} style={{ height: '360px' }}></MediaCard>
  //     </Grid>
  //   );
  // }

  return (
    // <div>
    <MainContainer>
      {/* <Headroom>
        <Typography variant="h4" component="h1" gutterBottom>
          TemAqui
        </Typography>
      </Headroom> */}
      {/* <Headroom
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}
        wrapperStyle={{ marginBottom: 2 }}
        style={{
          // background: 'rgb(57, 111, 176)',
          background: 'rgb(66, 168, 236)',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
          display: 'flex'
          // backgroundImage: `url(${BackgroundHeader})`,
        }}
      > */}
        {/* <img src={LogoHeader} style={{ 'width': '100px' }}></img> */}
        {/* <img src={LogoHeader} style={{ 'position': 'absolute' }}></img>
        <Container style={{ padding: 10 }}> */}
          {/* <Typography variant="h3" component="h1"
            style={{
              margin: 0,
              color: 'rgb(252, 253, 254)',
              'font-weight': '600',
              'font-family': 'Work Sans,sans-serif',
            }}
          >
            TUDO AQUi
          </Typography> */}
          {/* <ButtonGroup size="large" color="inherit"
            variant="text"
            style={{
              color: 'white',
            }}
            aria-label="text primary button group">
            <Button>Home</Button>
            <Button href="/promocao">Promoções</Button>
            <Button>Cupons</Button>
          </ButtonGroup>
        </Container>
      </Headroom>
      <Container maxWidth="lg">
        <Box my={4}> */}
          {/* <Typography variant="h4" component="h1" gutterBottom>
            TUDO AQUI!!! ---- Gatsby v4-beta example
          </Typography> */}
          {/* <Link to="/about" color="secondary">
            Go to the about page
          </Link> */}
          <Grid container spacing={3}>
            {
              (contents != null && contents.length > 0) &&
              contents.map(element =>
                <Grid content item xs={12} sm={3}>
                  <MediaCard props={element}></MediaCard>
                </Grid>
              )
            }
          </Grid>
          {/* <MediaCard props={values[0]}></MediaCard> */}
          {/* <ProTip /> */}
        {/* </Box>
      </Container>
      <Copyright /> */}
    </MainContainer>
  );
}
