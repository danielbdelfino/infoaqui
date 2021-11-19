import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import React, { useEffect, useState } from 'react';
import api from '../components/api/crawlerapi';
import MainContainer from '../components/MainContainerv2';
import News3CardDemo from '../components/News3CardDemo';

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

export default function Noticias() {
  const styles = useStyles();
  const [contents, setContents] = useState([{ link: '', link_image: '', title: '' }]);
  const [nextPage, setNextPage] = useState(12);

  const loadMore = () => {
    setNextPage(nextPage + 12);

    api.getType('news', nextPage, (results) => {
      var newContents = contents.concat(results);
      setContents(newContents);
    });
  };

  useEffect(() => {
    api.getType('news', undefined, (results) => setContents(results));
  }, []);

  return (
    <MainContainer>
      <Chip
        className={styles.titlePage}
        icon={<LibraryBooksIcon />}
        label="Notícias"
      />
      
      <div style={{ paddingTop: '35px' }}>
        <Grid container spacing={4}>
          {
            (contents != null && contents.length > 0) &&
            contents.map(element =>
              <Grid content item xs={12} sm={4}>

                <News3CardDemo props={element}></News3CardDemo>
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
