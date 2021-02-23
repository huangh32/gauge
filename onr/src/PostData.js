import React,{createRef, Component} from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './PostData.module.css';
// import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart'
import { color } from 'd3';





class PostData extends React.Component {
    constructor(props) {
        super(props);
       
    
        this.state = {
            data: this.props.data,
            name:this.props.name,
            selected:''
        };

        
     

    }

    handleChange (newName, i) {
        console.log('handleChange Name: ', newName);
        // console.log('handle props: ', this);
        console.log('index is: ',i);
        this.setState({name: newName, selected:i });//for current script
        
        this.props.onNameChange({name:newName});//for father script
        
    }

    toggleStyles(index){
        const isItemSelected = this.state.selected ===index;
        return isItemSelected? '1px solid #03a9f4':'white'

    }


    

    render(){
        // console.log('GaugeData is: ',this.state.data);
        // console.log('render',this);
         console.log('name: ',this.state.name);
        const that = this;//remind Not for function scope
            console.log('after name:', that.state.name)



        const focus = {
            border: '1px solid #03a9f4'
        }
        
      

        return (
        <Grid container spacing ={1}>
        {this.state.data.map(function(item, index) {
            return <Grid  item xs={4} spacing={3}>
                   <Card  style = {{}} id = {index} key = {index} onClick={
                    //    that.handleChange.bind(this,item.name)
                    (event) => that.handleChange(item.name, index, event)
                   }>
                        <CardContent>
                            <Typography color='primary' variant='h6' component='h8' >
                                {item.name}
                            </Typography>
                            <Typography color='primary'   component='h7'>
                        <GaugeChart 
                            id={`$gchart`+index} percent={item.score/100}
                            textColor={'#039be5'}colors={['#e1f5fe','#b3e5fc','#29b6f6']}
                            arcWidth={0.3} 
                            />
                            </Typography>
                            <Typography color='primary'   variant='h8' component='h7'>
                            Sample: {item.sample}
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>   
        })
        }
        {/* <button onClick={this.change}>Transform</button> */}
        </Grid>
        
        )
    }
}

export default PostData;

{/* <Grid item  xs={4} className={styles.card} key={index}>
                <Card>
                <CardContent>
                    <Typography color='primary' variant='h5' component='h4'gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography color='primary'   component='p'>
                    picture Here
                    </Typography>
                    <Typography color='primary'   component='p'>
                    Sample: {item.sample}
                    </Typography>
                </CardContent>
                </Card>
                </Grid> */}




                // <Card key = {index} onClick={e=>
                //     {
                //     console.log('change: ', item.name)}
                //     } >