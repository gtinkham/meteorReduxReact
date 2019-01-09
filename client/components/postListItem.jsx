import React from 'react';

const PostListItem = ({post}) => (
    <div className="row">
        <div className="col-xs" style={{padding: '.5rem'}}>
            <div>post.upvotes</div>
            <div>post.downvotes</div>
        </div>
        <div className="col-xs"  style={{padding: '.5rem'}}>
            {/*// TODO replace with if null case */}
            {post.image ? <img src={post.image} alt="postAvatar"/> : null}
        </div>
        <div className="col-xs"  style={{padding: '.5rem'}}>
            <div>{post.title}</div>
            <div>{post.description}</div>
        </div>
    </div>
)

export default PostListItem;
