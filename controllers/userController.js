const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find(); // waiting to the users to find
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');// finding a single used by ID
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // creating a asyncronomos function to create new user
  async createUser(req, res) {
    try{
        const user = await User.create(req.body);// once user is created we are requesting a body
        res.json(user);
    }catch(err) {
        res.status(500).json(err);
    }
  },

  //update User controll 
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate( // waiting to the user to be find and then update it. 
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete function 
  async deleteUser(req, res) {
    try {
      console.log(`Deleting user with id: ${req.params.userId}`);
      const user = await User.deleteOne({ _id: req.params.userId });
      if (!user) {
        console.log('No user found with that ID');
        return res.status(404).json({ message: 'No user with this id!' });
      }
      console.log(`Deleting thoughts with ids: ${user.thoughts}`);
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and associated thoughts deleted!' });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json(err);
    }
  },
  
  //add friend function
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(  // waiting to a friend ID to be found and and updated
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //remove friend function
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },//The $pull operator removes from an array all instances of a value or values that match a specified condition.
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};