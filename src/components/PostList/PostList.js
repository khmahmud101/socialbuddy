import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
const PostList = () => {
    const [post,setPost] = useState([]);
   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPost(data));
    },[]);
    
    return (
        <div className="container">
           <Grid container
  direction="row"
  justify="center" 
  alignItems="center" spacing={3}>
           {
              post.map(post=> <SinglePost post = {post} /> ) 
          }  
      </Grid>
     
 
        
        </div>
    );
};

export default PostList;