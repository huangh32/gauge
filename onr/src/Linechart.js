import React, { useRef,createRef, useEffect, Component, useState } from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './Linechart.module.css';
import {Line} from 'react-chartjs-2';
import Chartjs from "chart.js";
// import * as d3 from "d3";

function Linechart(props) {
   
    

      const{data, name} = props;
  
      let name_string = name?name.name.name:'';
   

      const [dataChart, setdataChart] = useState({
        labels:['Apr','May','June','July'],
        datasets:[
            {    
                label:'score',
                data:[20,30,90,30]
            }
        ]
    });
       

    
       let sample = [];
       let xLabel = [];


       
        Object.entries(data).forEach((item)=>{
            if(item[0]===name_string){
                // console.log('get in');
            item[1].forEach((index)=>{
                sample.push(index.score);
                 xLabel.push(index.date);

            })}
        })

        
    

    useEffect(()=>{

        setdataChart(state=> ({
            labels:xLabel,
            datasets:[
                {    
                    label:'score',
                    data:sample
                }
                     ]
                })
                );
                },[name]);
       
     
        
      


        
    

 return (
    <div id = 'container'  className={styles.container}>
         <Line  data={dataChart} width={120} height={50} />

        
    </div>
  );

}
export default Linechart;
