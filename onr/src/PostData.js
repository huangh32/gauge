import React,{createRef, Component} from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './PostData.module.css';
// import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart'



// export function savefunction (name) {
//     let target = name;
//     console.log('savefunction: ', target);
// }

class PostData extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    
        this.state = {
            data: this.props.data,
            name:this.props.name,
            score:''
        };

        
        // this.handleChange = this.handleChange.bind(this);

    }

    handleChange (newName) {
        console.log('handleChange Name: ', newName);
        console.log('handle props: ', this);
         this.setState({name: newName});
        this.props.onNameChange({name:newName});
        
    }

    

    render(){
        console.log('GaugeData is: ',this.state.data);
        console.log('render',this);
        console.log('name: ',this.state.name);
        const that = this;//remind Not for function scope
        return (
        <Grid container spacing ={1}>
        {this.state.data.map(function(item, index) {
            return <Grid  item xs={4} spacing={3}>
                   <Card key = {index} onClick={
                    //    that.handleChange.bind(this,item.name)
                    (event) => that.handleChange(item.name, event)
                   }>
                <CardContent>
                    <Typography color='primary' variant='h7' component='h6' gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography color='primary'   component='p'>
                   <GaugeChart 
                    id={`$gchart`+index} percent={item.score/100}
                    textColor={'#039be5'}colors={['#e1f5fe','#b3e5fc','#29b6f6']}
                    arcWidth={0.3} 
                    />
                    </Typography>
                    <Typography color='primary'   variant='h8' component='h8'>
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