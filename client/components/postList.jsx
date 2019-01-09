import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Posts } from '../../collections/posts/postCollection';

const PER_PAGE = 20;
class PostList extends React.Component {
    render () {
        return (
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
    }
}

export default createContainer(() => {
    Meteor.subscribe('posts', PER_PAGE);

    return {posts: Posts.find({}).fetch()};
}, PostList) ;