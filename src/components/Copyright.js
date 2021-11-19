import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: 'rgb(66, 168, 236)',
    bottom: 0,
    //position: 'absolute',
    width: '100%'
  },
  tipStyle: {
    margin: theme.spacing(1, 0, 1, 0),
    color: 'white'
  }
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.root} color="primary">
      <Typography variant="body2" color="background" align="center" className={classes.tipStyle}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.infoaqui.net.br/">
          www.infoaqui.net.br
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
