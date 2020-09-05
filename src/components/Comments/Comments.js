import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
const Comments = (props) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);
    return (
        <div>



            {
                comments.map(comment =>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper>
                                <div style={{padding:"20px"}}>
                                    <p>{comment.body}</p>
                                    <p>Email: {comment.email}</p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                )
            }



        </div>
    );
};

export default Comments;