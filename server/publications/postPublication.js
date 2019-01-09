import {Posts} from "../../collections/posts/postCollection";

Meteor.publish('posts', function(per_page) {
    return Posts.find({}, {limit: per_page});
});