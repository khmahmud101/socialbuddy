import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './SinglePost'
const SinglePost = (props) => {
   const {id,title } = props.post;
   const postStyle = {
       height:"200px",
       padding:"20px",
   }

    return (
        
        
     
        <Grid container 
  direction="row"
  justify="center"
  alignItems="center"  item  md={3}>
        
        <Paper> 
        <div style={postStyle}>
            <h3>  {id} </h3>

           <p> {title}</p>
          
            <Button variant="contained" color="primary">
  Post Details
</Button>

</div>
</Paper>
        
        </Grid>
        
           
       
    );
};

export default SinglePost;