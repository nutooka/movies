import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import Page from '../../components/Page';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 80
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  }
}));

function Error404View() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="404: Not found"
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant="h2"
          color="textPrimary"
        >
          404: The page you are looking for isn’t here
        </Typography>

        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
        </Box>

        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <Button
            color="secondary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>

      </Container>
    </Page>
  );
}

export default Error404View;
