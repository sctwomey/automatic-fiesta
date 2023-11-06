const { Schema, Types, model } = require('mongoose');

// The reaction schema is all that is required for reactions. It is included in the Thought model since this model is where it will be utilized.
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toString();
        },
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    reactions: [reactionSchema],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toString();
        },
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// This is for the creation of a virtual property that is used for the reaction count.
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;