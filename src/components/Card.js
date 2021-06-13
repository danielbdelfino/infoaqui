import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 340
  },
  media: {
    height: 140,
  },
  actionArea: {
    height: 340
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  // console.log(props);
  const { link, link_image, title } = props.props;
  // console.log(link);
  // console.log(link_image);
  // console.log(title);

  return (
    <Card className={classes.root}>
      <CardActionArea 
        href={link} 
        target="_blank" 
        className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={link_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
            {/* {title.substring(0, 30) + '(...)'} */}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <a href={link} target="_blank" >
          <Button size="small" color="primary">
            Leia mais...
          </Button>
        </a> */}
        {/* <Button variant="contained" color="primary" href={link} target="_blank">
          Veja mais
        </Button> */}
      {/* </CardActions> */}
    </Card>
  );
}
