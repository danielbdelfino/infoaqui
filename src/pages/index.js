import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import api from '../components/api/crawlerapi';
import MainContainer from '../components/MainContainerv2';
import News3CardDemo from '../components/News3CardDemo';
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titlePage: {
    width: '100%',
    height: '50px',
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#565656',
    marginBottom: '10px',
    "& .MuiChip-icon": { fontSize: '50px' }
  },
  buttonStyle: {
    textAlign: 'center',
    width: '100%',
    paddingTop: '15px',
    paddingBottom: '15px'
  }
}));

export default function Index() {
  const styles = useStyles();
  const [contentsGames, setContentsGames] = useState([{ link: '', link_image: '', title: '' }]);
  const [contentsNews, setContentsNews] = useState([{ link: '', link_image: '', title: '' }]);
  const [contentsTecnology, setContentsTecnology] = useState([{ link: '', link_image: '', title: '' }]);
  const [contentsEntertainment, setContentsEntertainment] = useState([{ link: '', link_image: '', title: '' }]);

  useEffect(() => {
    //games();
    api.getGames((results) => setContentsGames(results))
    api.getNews((results) => setContentsNews(results))
    api.getTecnology((results) => setContentsTecnology(results))
    api.getEntertainment((results) => setContentsEntertainment(results))

  }, []); //o parâmetro com array vazio faz com que o useEffect() seja executado apenas uma vez

  // setInit('start');

  return (
    // <div>
    <MainContainer>
      {/* GAMES */}
      <Chip
        className={styles.titlePage}
        icon={<SportsEsportsIcon />}
        label="Jogos"
      />
      <Grid container spacing={4}>
        {
          (contentsGames != null && contentsGames.length > 0) &&
          contentsGames.map(element =>
            <Grid content item xs={12} sm={4}>
              <News3CardDemo props={element}></News3CardDemo>
            </Grid>
          )
        }
      </Grid>
      <div className={styles.buttonStyle}>
        <Button variant="outlined" color="primary" href="/jogos" >
          Veja mais sobre Jogos...
        </Button>
      </div>
      {/* NEWS */}
      <Chip
        className={styles.titlePage}
        icon={<LibraryBooksIcon />}
        label="Notícias"
      />
      <Grid container spacing={4}>
        {
          (contentsNews != null && contentsNews.length > 0) &&
          contentsNews.map(element =>
            <Grid content item xs={12} sm={4}>
              <News3CardDemo props={element}></News3CardDemo>
            </Grid>
          )
        }
      </Grid>
      <div className={styles.buttonStyle}>
        <Button variant="outlined" color="primary" href="/noticias" >
          Veja mais sobre Notícias...
        </Button>
      </div>
      {/* TECNOLOGY */}
      <Chip
        className={styles.titlePage}
        icon={<ComputerIcon />}
        label="Tecnologia"
      />
      <Grid container spacing={4}>
        {
          (contentsTecnology != null && contentsTecnology.length > 0) &&
          contentsTecnology.map(element =>
            <Grid content item xs={12} sm={4}>
              <News3CardDemo props={element}></News3CardDemo>
            </Grid>
          )
        }
      </Grid>
      <div className={styles.buttonStyle}>
        <Button variant="outlined" color="primary" href="/tecnologia" >
          Veja mais sobre Tecnologia...
        </Button>
      </div>
      {/* ENTERTAINMENT */}
      <Chip
        className={styles.titlePage}
        icon={<EmojiEmotionsIcon />}
        label="Entretenimento"
      />
      <Grid container spacing={4}>
        {
          (contentsEntertainment != null && contentsEntertainment.length > 0) &&
          contentsEntertainment.map(element =>
            <Grid content item xs={12} sm={4}>
              <News3CardDemo props={element}></News3CardDemo>
            </Grid>
          )
        }
      </Grid>
      <div className={styles.buttonStyle}>
        <Button variant="outlined" color="primary" href="/entretenimento" >
          Veja mais sobre Entretenimento...
        </Button>
      </div>
    </MainContainer>
  );
}
