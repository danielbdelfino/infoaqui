import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
//import faviconmeups from "../images/favicons/faviconmeups.png"
import iconUri from "./util/iconsfromuri";

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
  const { link, link_image, title, self_path, id, name } = props.props;
  console.log(self_path);

  return (
    <Card className={classes.root}>
      <CardActionArea
        href={'/p?id=' + id + '&page=' + self_path}
        target="_blank"
        className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={link_image}
          title="Contemplative Reptile">
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
