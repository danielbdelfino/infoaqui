import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import Grid from '@material-ui/core/Grid';
import MainContainer from '../components/MainContainerv2';
import Chip from '@material-ui/core/Chip';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { makeStyles } from '@material-ui/core/styles';
import News3CardDemo from '../components/News3CardDemo';
import api from '../components/api/crawlerapi';
import InfiniteScroll from 'react-infinite-scroller';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  titlePage: {
    width: '100%',
    height: '50px',
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#565656',
    "& .MuiChip-icon": { fontSize: '50px' }
  },
}));

export default function Games() {
  const styles = useStyles();
  const [contents, setContents] = useState([{ link: '', link_image: '', title: '' }]);
  const [nextPage, setNextPage] = useState(12);

  const loadMore = () => {
    setNextPage(nextPage + 12);

    api.getType('games', nextPage, (results) => {
      var newContents = contents.concat(results);
      setContents(newContents);
    });
  };

  useEffect(() => {
    api.getType('games', undefined, (results) => setContents(results));
  }, []);

  return (
    <MainContainer>
      {/* <Container maxWidth="sm"> */}
      <Chip
        className={styles.titlePage}
        icon={<SportsEsportsIcon />}
        label="Games"
      />
      {/* <Box my={4}> */}
      {/* <Typography variant="h4" component="h1" gutterBottom>
            Games
          </Typography> */}
      {/* <Link to="/">Go to the main page</Link> */}
      {/* <ProTip />
          <Copyright />
        </Box>
      </Container> */}
      <div style={{ paddingTop: '35px' }}>
        <Grid container spacing={4}>
          {/* <Grid container spacing={3}> */}
          {
            (contents != null && contents.length > 0) &&
            contents.map(element =>
              <Grid content item xs={12} sm={4}>
                {/* <Grid content item xs={12} sm={3}> */}
                {/* <CardOverText props={element}></CardOverText> */}

                <News3CardDemo props={element}></News3CardDemo>
                {/* <MediaCard props={element}></MediaCard> */}
              </Grid>
            )
          }
        </Grid>
      </div>
      <div style={{
        textAlign: 'center',
        width: '100%',
        paddingTop: '35px'
      }}>
        <Button variant="contained" color="primary" onClick={loadMore}>
          Carregar mais...
        </Button>
      </div>
    </MainContainer >
  );
}
