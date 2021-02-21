import './App.css';
import React, { useState, useEffect,useRef } from "react";
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import styles from './App.module.css';
import InfoIcon from '@material-ui/icons/Info';
import PostData from './PostData';
import Linechart from'./Linechart';
import Data from './data.json';
import { select } from 'd3';

function App() {
  const [areadata,setData] = useState(Data.areaData);
  const [gaugeData, setgaugeData] = useState(Data.gaugeData);
  const [name,setName] = useState('');

 
  function handleName(name){
    setName(
     {name}
    )
    console.log('in APP new Name is: ', name);
  };




  return (
    
    <div className="App">
      <Grid container className={styles.container}>
       
          <Grid item xs={12} className = {styles.header}>PERFORMANCE MANAGEMENT</Grid>
          <Grid item xs={12} className = {styles.header2}>
            <LanguageIcon />
            Diagnostic Tool</Grid>
       

        
          <Grid item xs={12} sm={4} className={styles.smallcontainer}>Filters
          
            <Box border={1} borderRadius={10} boxShadow={3} className={styles.table1}>
            <Grid item sm = {6} ><CheckBoxIcon style={{ fill: '#03a9f4' }}/> All CQA Results<InfoIcon /></Grid>
            <Grid item sm = {6}><CheckBoxIcon style={{ fill: '#e1f5fe' }}/>CQAs with Closed Loop<InfoIcon /></Grid>
            </Box>
          
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
         <PostData data={gaugeData} name={name} onNameChange={handleName}/>
        </Grid>


        <Grid item xs={12} sm={7} className={styles.line}>
          
          <Linechart data={areadata}  name={name}  />
          
        </Grid>


      </Grid>
    </div>
  );
}

export default App;
  // useEffect(() => {
  //   regenerateData();
  // }, []);

  // function regenerateData() {
  //   const scoreData = areadata;
    

  //   }
  //   setData(scoreData)
  // }