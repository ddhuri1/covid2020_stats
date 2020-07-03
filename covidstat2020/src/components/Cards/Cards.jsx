import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import classCombiningStyles from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Still Loading Data...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={classCombiningStyles(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant="body2" component="p"> ACTIVE CASES </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={classCombiningStyles(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant="body2" component="p"> RECOVERED </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={classCombiningStyles(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant="body2" component="p"> DEATHS </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;