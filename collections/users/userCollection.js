import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export const Users =  Meteor.users;


const UserSchema = new SimpleSchema({
    fullname: {
        type: String,
        label: "Full Name",
        max: 200
    },
    username: {
        type: String,
        label: "userName",
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    'emails.$': {
        type: Object
    },
    'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
        type: Boolean
    }
});


Users.attachSchema(UserSchema);