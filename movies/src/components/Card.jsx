import React from 'react';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 345,
    minHeight: 400,
    marginBottom: 40,
    marginRight: 40,
  },
  overview: {
    height: 80,
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
  media: {
    objectFit: 'cover',
    height: 250
  },
  action: 70
});

const CustomCard = ({ title, img, overview, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.overview} variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.action}>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>

    </Card>
  );
}

export default CustomCard;
