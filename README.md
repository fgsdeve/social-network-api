# Social Network API

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Resources](#resources)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://git@github.com:fgsdeve/social-network-api.git. tutorial video https://drive.google.com/file/d/1TGJf20U-baaEk84j2ueAbizA7Pz_gvaD/view?usp=sharing.
   cd social-network-api.

2. Install dependencies: npm install, install express mongoose, install nodemon --save-dev.
   
3.Ensure MongoDB is running on your machine.

4.Start the server: npx nodemon server.js

## Usage
Use Postman or a similar API client to test the API endpoints. Ensure MongoDB is running on your machine before starting the server.

## API Endpoints
### Users

Create a New User

- Method: POST
URL: /api/users
Body:
{
  "username": "newuser",
  "email": "newuser@example.com"
}

- Get All Users:

- Method: GET
URL: /api/users
Get Single User by ID

- Method: GET
URL: /api/users/:userId
Update User by ID

- Method: PUT
URL: /api/users/:userId
Body:
{
  "username": "updateduser",
  "email": "updateduser@example.com"
}

- Delete User by ID:

- Method: DELETE
URL: /api/users/:userId
Add Friend

- Method: POST
URL: /api/users/:userId/friends/:friendId
Remove Friend

- Method: DELETE
URL: /api/users/:userId/friends/:friendId

### Thoughts

Create a New Thought:

- Method: POST
URL: /api/thoughts
Body:
{
  "thoughtText": "Here's a cool thought...",
  "username": "newuser",
  "userId": "<userId>"
}

Get All Thoughts:

- Method: GET
URL: /api/thoughts
Get Single Thought by ID

- Method: GET
URL: /api/thoughts/:thoughtId
Update Thought by ID

- Method: PUT
URL: /api/thoughts/:thoughtId
Body:
{
  "thoughtText": "Updated thought text"
}

Delete Thought by ID:

- Method: DELETE
URL: /api/thoughts/:thoughtId
Add Reaction to Thought

- Method: POST
URL: /api/thoughts/:thoughtId/reactions
Body:
{
  "reactionBody": "Great thought!",
  "username": "newuser"
}

Remove Reaction from Thought:

- Method: DELETE
URL: /api/thoughts/:thoughtId/reactions/:reactionId

## Technologies Used

- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing data.
- Mongoose: ODM for MongoDB to interact with the database.
- Nodemon: Utility to monitor for any changes in the source and automatically restart the server.
- Postman: API client to test API endpoints.

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js.
- mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- nodemon: Utility that monitors for any changes in your source and automatically restarts your server.

## Resources

- Express.js Documentation: Express.js
- MongoDB Documentation: MongoDB
- Mongoose Documentation: Mongoose
- Node.js Documentation: Node.js
- Nodemon Documentation: Nodemon
- Postman Documentation: Postman

## License
This project is licensed under the MIT License. See the LICENSE file for details.
