import React,{createRef, Component} from 'react';
import Data from './data.json';
import {Grid, Typography, Button, Box, Card, CardContent, GridList,GridListTile,GridListTileBar} from '@material-ui/core';
import styles from './PostData.module.css';

class PostData extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        this.state = {
            data:{
                gaugeData:Data.gaugeData
            }
        };
    }
    render(){
        console.log('PostData is: ',this.state.data.gaugeData);
        return (
        <Grid container spacing ={1}>
        {this.state.data.gaugeData.map(function(item, index) {
            return <Grid  item xs={4} spacing={3}>
                <Card>
                <CardContent>
                    <Typography color='primary' variant='h6' component='h6' gutterBottom>
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
            </Grid>
            
        })
        }
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