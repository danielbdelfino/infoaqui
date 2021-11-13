import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FacebookProvider, ShareButton, Share } from 'react-facebook';
import Avatar from "@material-ui/core/Avatar";
//import faviconmeups from "../images/favicons/faviconmeups.png"
import iconUri from "./util/iconsfromuri"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 340
  },
  media: {
    height: 250,
    position: "relative"
  },
  actionArea: {
    height: 340
  },
  shareButton: {
    bottom: '10px',
    position: 'absolute',
    marginLeft: '15px'
  },
  title: {
    position: "absolute",
    bottom: "0px",
    color: "white",
    background: "rgba(0, 0, 0, 0.4)",
    marginBottom: "0px"
  },
  infosPage: {
    clear: "both",
    display: "flex",
    align: "vertical",
    "text-align": "center",
    "align-items": "center"
  },
  avatar: {
    width: "24px", 
    height: "24px"
  },
  urlPage: {
    marginLeft: "4px"
  }
});

export default function CardOverText(props) {
  const classes = useStyles();

  // console.log(props);
  const { link, link_image, title, self_path, id, name } = props.props;
  // console.log(link);
  // console.log(link_image);
  // console.log(title);
  console.log(self_path);

  return (
    <Card className={classes.root}>
      <CardActionArea
        // href={link}
        href={'/p?id=' + id + '&page=' + self_path}
        target="_blank"
        className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={link_image}
          title="Contemplative Reptile">
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
            {/* {title.substring(0, 30) + '(...)'} */}
          </Typography>
        </CardMedia>
        <CardContent>
        <div className={classes.infosPage}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src={iconUri.getIconFromUri(name)}
            />
            <Typography gutterBottom className={classes.urlPage}>
              {iconUri.getUriClean(name)}
            </Typography>
          </div>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography> */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
        {/* <FacebookProvider appId="2891194764529737">
          <ShareButton href={self_path} className={classes.shareButton}>
            Compartilhar
          </ShareButton>
        </FacebookProvider> */}
      </CardActionArea>
      {/* <CardActions>
        <FacebookProvider appId="2891194764529737">
          <ShareButton href={link}>
            Compartilhar
          </ShareButton>
        </FacebookProvider>
      </CardActions> */}
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
