import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VUUserSchema = new Schema({

    firstName: {
        type: String,
        required: [
            true, 'First name is required.'
        ],
    },

    lastName: {
        type: String,
        required: [
            true, 'Last name is required.'
        ],
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [
            true, 'Email is required.'
        ]
    },

    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [
            true, 'Username is required.'
        ]
    },

    password: {
        type: String,
        required: [
            true, 'Password is required.'
        ]
    },

    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'VURoleModel',
            required: [
                true, 'The role is required.'
            ]
        }
    ],

    entities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'VUEntityModel',
            required: [
                true, 'The entity is required.'
            ]
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'vu_users' });

require('./statics/vu.user.static').default(VUUserSchema);

export default mongoose.model('VUUserModel', VUUserSchema);