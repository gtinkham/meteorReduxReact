import React from 'react';



const PostList = () => (
    <div className="container-fluid" style={{backgroundColor: 'black', color: 'white'}}>
        <div className="row">
            <div className="col-xs" style={{padding: '.5rem'}}>
                <div>upvote</div>
                <div>downvote</div>
            </div>
            <div className="col-xs"  style={{padding: '.5rem'}}>
                image
            </div>
            <div className="col-xs"  style={{padding: '.5rem'}}>
                <div>Title</div>
                <div>Description</div>
            </div>
        </div>
    </div>
)

export default PostList;