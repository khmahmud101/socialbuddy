import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
const SinglePost = (props) => {
    const { id, title } = props.post;
    const history = useHistory();
    const postStyle = {
        height: "200px",
        padding: "20px",
    }
    const handlePost = (postId)=>{
        const url = `/post/${postId}`;
        history.push(url);

    }
    return (

        <Grid container
            direction="row"
            justify="center"
            alignItems="center" item md={3}>

            <Paper>
                <div style={postStyle}>
                    <h3>  {id} </h3>
                     <p> {title}</p>
                     <Button onClick={()=>handlePost(id)} variant="contained" color="primary">
                        Primary
                    </Button>

                </div>
            </Paper>

        </Grid>



    );
};

export default SinglePost;