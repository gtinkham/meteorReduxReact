import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Posts } from '../../collections/posts/postCollection';
import PostListItem from './postListItem';

const PER_PAGE = 20;
class PostList extends React.Component {
    renderPosts(posts) {
        return posts.map((post)=> <PostListItem key={post._id} post={post}/>);
    }
    render () {
        console.log(this.props.posts);
        return (
            <div className="container-fluid" style={{backgroundColor: 'black', color: 'white'}}>
                {this.renderPosts(this.props.posts)}
            </div>
        )
    }
}

export default createContainer(() => {
    const sub = Meteor.subscribe('posts', PER_PAGE);
    return {posts: Posts.find({}).fetch()};
}, PostList) ;