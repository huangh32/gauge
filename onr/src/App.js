import './App.css';
import React from 'react';
import {Grid, Typography, Button, Box, Card, CardContent, } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import styles from './App.module.css';

import PostData from './PostData';


function App() {
  return (
    <div className="App">
      <Grid container className={styles.container}>
       
          <Grid item xs={12} className = {styles.header}>PERFORMANCE MANAGEMENT</Grid>
          <Grid item xs={12} className = {styles.header2}>
            <LanguageIcon />
            Diagnostic Tool</Grid>
       

        
          <Grid item xs={12} sm={4} className={styles.smallcontainer}>Filters
          <Grid item xs={12} sm={6} className = {styles.table1}>
            <Box border={1} borderRadius={10} boxShadow={3}>
            <Grid item sm = {6} ><CheckBoxIcon style={{ fill: '#03a9f4' }}/> All CQA Results</Grid>
            <Grid item sm = {6}><CheckBoxIcon style={{ fill: '#e1f5fe' }}/>CQAs with Closed Loop</Grid>
            </Box>
          </Grid>
          </Grid>

          <Grid item xs={12} sm={4} className={styles.bigcontainer}>QUALITY SCORE TREND</Grid>
          <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary">Day</Button>
              <Button variant="contained" color="primary">Week</Button>
              <Button variant="contained" color="primary">Month</Button>
              <Button variant="contained" color="primary">Quarter</Button> 
              <Button variant="contained" color="primary">Half</Button> 
              <Button variant="contained" color="primary">Year</Button> 
          </Grid>
      </Grid>

      <Grid container className={styles.container}>
        <Grid item xs={3} className={styles.gauge}>

          <Grid container spacing={24}>
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
          </Grid>

          <Grid container spacing={24}>
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
            <Grid item  xs={4} className={styles.card}>
            <Card>
            <CardContent>
                <Typography color='primary' variant='h5' component='h4'gutterBottom>
                    Quality Score
                </Typography>
                <Typography color='primary'   component='p'>
                  picture Here
                </Typography>
                <Typography color='primary'   component='p'>
                  Sample: 133
                </Typography>
            </CardContent>
            </Card>
            </Grid> 
          </Grid>





          
        </Grid>


        <Grid item xs={12} sm={7} className={styles.line}>
          Line Chart
        </Grid>


      </Grid>
    </div>
  );
}

export default App;
