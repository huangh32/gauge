import React, { useRef, useEffect,createRef, Component } from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './Linechart.module.css';
import * as d3 from "d3";

function Linechart(props) {
      const{data, name, width, height} = props;
      console.log('linechart:',data);
      let name_string = name?name.name.name:'';
      console.log('namestring: ',name_string);
     // console.log('linechart name: ',data.name_string?name.name.name:'1');//string

       let fetchData = [];
       let xLabel = [];
       
       
        // const contentKeys = Object.keys(data);//get the Keys from data
        // console.log('after data:',contentKeys);
        
        Object.entries(data).forEach((item)=>{
            // console.log('item index: ', item[0]);
            // console.log('item array: ', item[1]);
            if(item[0]===name_string){
                console.log('get in');
            item[1].forEach((index)=>{
                //console.log('condition array: ', index.score);
                fetchData.push(index.score);
                xLabel.push(index.date);
                //console.log('score: ', fetchData);
                // // index.forEach((score_index)=>{
                    
                // //     fetchData.push(score_index.score);
                // //     console.log('score: ', fetchData);
                // // });
            })}
        })

        console.log('updated fetchData: ', fetchData);
        console.log('update xlabel: ', xLabel);
        
        // for(let i =0;i<contentKeys.length;i++){
        //     if(contentKeys[i]===name_string){
        //         console.log('content index: ', i);
               
        //     }
        // }


        //data.find(item=>item.key===name_string);
       
        //let score = contentKeys.map((t)=>data.content[t])?name_string:''

       
        // Object.keys(data).forEach(function(key){
        //     fetchData.push(data[key]);
        // });

    
    



    useEffect(() => {
       // drawChart();
    }, [data]);

    function drawChart() {
    /*Define basics values for chart */
    const margin = {top : 50, right: 50, bottom: 50, left: 50};
    
    // const yMinValue = d3.min();
    // const yMaxValue = d3.max()
    // const xMinValue = d3.min()
    // const xMinValue = d3.max()

    }

 return (
    <div className={styles.container}>
    {fetchData}
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