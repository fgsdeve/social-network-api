const {Schema, model } = require ('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true,
        },

        email: {
            type: String,
            require: true,
            unique: true,
            match:  [/.+@.+\..+/, 'Must match a valid email address'],
        },
        
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
        
        friend : [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friend.length;
});

const User = model ('User', userSchema);

module.exports = User;