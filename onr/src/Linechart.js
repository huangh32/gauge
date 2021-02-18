import React, { useRef, useEffect,createRef, Component } from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './Linechart.module.css';
import * as d3 from "d3";

function Linechart(props) {
     const{data} = props;
     


     
    useEffect(() => {
       // drawChart();
    }, [data]);

    function drawChart() {

    }

 return (
    <div className="App">
 
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
