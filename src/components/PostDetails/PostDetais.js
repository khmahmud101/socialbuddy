import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const PostDetais = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])
    return (
        <div>



            <br />
            <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Paper >
                        <h3><strong>Post ID:</strong> {post.id}</h3>
                        <p><strong>Post Title:</strong> {post.title}</p>
                        <p><strong>Body:</strong> {post.body}</p>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={6}>

                        <Paper>
                            <img src="" alt=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>

                        <Paper>

                            <h3>Comments</h3>
                            <Comments postId={postId}></Comments>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>








        </div>
    );
};

export default PostDetais;