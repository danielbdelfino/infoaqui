import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '../components/MainContainerv2';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import RobotComing from '../images/robot_coming.png';
import { Chip, Grid } from '@material-ui/core';

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
  imageAlign: {
    width: '100%',
    textAlign: 'center',
    display: 'block'
  },
  imageSize: {
    width: '60%'
  }
}));

export default function Cupons() {
  const styles = useStyles();

  return (
    <MainContainer>
      <Chip
        className={styles.titlePage}
        icon={<MoneyOffIcon />}
        label="Cupons"
      />
      
      <div style={{ paddingTop: '35px' }}>
        <Grid container spacing={4}>
          <div className={styles.imageAlign}>
            <Typography gutterBottom variant="h4" noWrap>
              Novidades em breve, aguarde!
            </Typography>
            <img src={RobotComing} className={styles.imageSize} />
          </div>
        </Grid>
      </div>
      <div style={{
        textAlign: 'center',
        width: '100%',
        paddingTop: '35px'
      }}>
        {/* <Button variant="contained" color="primary" onClick={loadMore}>
          Carregar mais...
        </Button> */}
      </div>
    </MainContainer >
  );
}
