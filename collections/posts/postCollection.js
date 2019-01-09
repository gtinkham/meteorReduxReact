import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
// import faker from 'faker';
import _ from 'lodash';

export const Posts = new Mongo.Collection('posts');


const PostSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    description: {
        type: String,
        label: "description",
        max: 1000
    },
    image: {
        type: String,
        label: "Image",
        optional: true
    },
    upvotes: {
        type: Number,
        label: "Number of copies",
        min: 0,
        defaultValue: 0
    },
    downvotes: {
        type: Number,
        label: "Number of copies",
        min: 0,
        defaultValue: 0
    },
    createdBy: {
        type: String,
        label: "user ID",
        optional: false
    }
});

Posts.helpers({
    totalVotes() {
        return this.upvotes + this.downvotes;
    }
});


Posts.attachSchema(PostSchema);


Meteor.startup(() => {
    // code to run on server at startup
    import faker from 'faker';

    // const numberRecords = Posts.find({}).count();
    // console.log('Number of posts',numberRecords);

    // if(numberRecords < 500) {
        // _.times(500, () => {
        //     const card = faker.lorem;
        //     const post = {
        //         title: card.sentence(),
        //         description: card.sentence(),
        //         upvotes: Math.floor(Math.random() * 1000),
        //         downvotes: Math.floor(Math.random() * 1000),
        //         image: faker.image.avatar(),
        //         createdBy: faker.internet.userName()
        //     }
        //     // console.log('post', post)
        //     Posts.insert(post);
        // });
    // }


});