import React, { useRef,createRef, useEffect, Component, useState } from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './Linechart.module.css';
import {Line} from 'react-chartjs-2';
import Chartjs from "chart.js";
// import * as d3 from "d3";

function Linechart(props) {
   
    

      const{data, name} = props;
      console.log('linechart:',data);
      let name_string = name?name.name.name:'';
      console.log('namestring: ',name_string);

      const [dataChart, setdataChart] = useState({
        labels:['Apr','May','June','July'],
        datasets:[
            {    
                label:'score',
                data:[20,30,90,30]
            }
        ]
    });
       

    console.log('old: ',dataChart);

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

        console.log('new: ', sample);
    
       

    useEffect(()=>{
        console.log('useEffect')
            setdataChart({
                labels:xLabel,
                datasets:[
                    {    
                        label:'score',
                        data:sample
                    }
                ]
            })
    },[dataChart]);
       
     
        
      


        
    

 return (
    <div id = 'container'  className={styles.container}>
         <Line  data={dataChart} width={100} height={50} />

        
    </div>
  );

}
export default Linechart;
// class Linechart extends Component {
//     constructor(props) {
//         super(props);
//         this.ref = createRef;
//         this.createLine = d3
       
        
//     }
    
    
//     render(){
       
        
//         return (
//         <div>wow</div>
        
//         )
//     }
// }

// export default Linechart;


        // for(let i=0;i<contentKeys.length;i++){
        //     if(contentKeys[i]===name_string){

        //        // fetchData = contentKeys[i].map((t)=>data.content[t].map((e)=>(<div>{e.score}</div>)));
        //     }
        // }