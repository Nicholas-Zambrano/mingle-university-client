# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Project Title

MingleU

## Overview

What is your app? Brief description in a couple of sentences.
MingleU is an application for new incoming university students to connect with their future peers who will be studying the same courses,hobbies and interests.
This app is aimed to create a community for students, e.g my application will allow them to already join societies, which eventually leads to building and establishing relationships before their first year begins. So that they can have a better university experience.

### Problem

Why is your app needed? Background information around any pain points or other reasons.
Many new university students come from thousands of miles away, meaning its likely that they will feel isolated and overwhelmed during their initial year due to the challenge of finding the correct friends hence this may cause them struggle to adapt in their new life. As a result mingleU, aims to bridge this gap by offering an online platform where students can easily find and connect with others in a fun and interactive way.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.
My target audience are for new incoming students.

- Users will create profiles, select their univesity, selec their courses, hobbies - Able to see whos in their courses as well as filtering users which meets their needs,
- As well as getting potential matches with other students

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- - registering - Users wiil be a ble to sign up and create an account \*
- - course matching - users will be able to see the students who are on their course
- - Hobbies and interests - users will list their hobbies
- - A swipe and match feature - students will swipe through numerous of students and be able to other view their interests
- - Private messaging - students will be able to communicate with other students - - Explore section - students will be able to explore the available courses and see other students enrolled in them

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- - front end - React
- - Backend - Node.js, Express.js - - Databases -knex.js

### APIs

List any external sources of data that will be used in your app.

- Pexels API
  -> This gives you a collection of free student photos that will be used for
  displaying the profiles of those students -> Endpoint:
  "https://"...".pexels.com/v1/search?query=university%20students%20faces"
  -> Authentication: Requires an API key to access.
  -> Usage: Fetches student photos for display in the app's user profiles. API key:hw9BQNs9CRuaZzqFSayHCFC7LWKqnhxlS8VGiMNF1akFlDlt0dqHsPyI

## Implementation

1. Begin with front end :
   -> set up the basic routes for the different pages
2. Create components:
   -> Create the components which will be displayed in those pages
   -> e.g Home Page, _Login Page_ , Dashboard, Swipe Page, User profile
3. Connect to pexels API
   -> Register for an API key -> Then fetch those studentes
4. Build User sign up:

    -> Create a form for username,email,password,
    -> Handle the submissiion of a new sign up and send the POST to the endpoint e.g "api/users/register " 

5) Course Matching:
    -> Implement course list and details page
    -> Fetch the available courses
    -> _Allow users ot select their course preference_ 6) User Profile:
    -> Use form to display their hobbies and interest -> Use the endpoint to update the user's profile e.g
    /api/users/:user_id/profile
    -> Feature to upload and display a profile picture. (this is going to be myself
    when signing up)
    
 7) Swipe and Match feature:
    ->The swiping page, allows you to swipe to different students 8) Private Messaging:
    -> allow private messaging, so need to use an endpoint 9) If if have time: Explore section
    -> Explore courses
    -> Fetch and display different courses from the endpoint, and show the users within that courses
BACKEND:

1. Set up the backend using Node.js
   -> set up the routes
   -> User registration
   -> Profile updates
   -> Messaging
   ->Suggested Student Profiles
    ->Course Matching
2. Connect to database:
   -> Start up a database in MySQL Workbench.
   -> Set up Knex.js to handle database queries and interactions -> Define database tables for users, courses, messages
3. Add the API routes:
   -> For user registration, course matching, profile updates, messaging, and
   suggested student profiles.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page
  -> Name of App - MingleU
  -> Icons e.g facebook, instagram, twitter links

- Login page
  -> University selection
  -> Course and their details prompt
- Dashboard
  -> Matches,
  -> explore courses,
  -> Messages
  -> Swipe page - swiping through and viewing other students
- User Profile

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- User registration:
  -> Endpoint: POST/"..."/users/register
  -> This endpoint allows users to register for an account -> example of request body:
  {
  "username": "nick123",
  "email": "nick@gmail.com",
  "password": "123"
  }
  -> Response:
  {
  "message": "Welcome to MingleU"
  }
- getting courses for matching preference:
  -> GET /"...."/courses/:course_id/students
  -> This endpoint gives you the list of students in that course -> Example of response:
  [
  { "id": 1, "name": "Nicholas Zambrano", "course": "Computer Science" },
  { "id": 2, "name": "Moises Caicedo", "course": "Computer Science" } ,{"id":3 , "name": "Pervis Estupinan", "course": "Computer Science} ]
- Update/edit profile:
  ->Endpoint: PUT /api/users/:user_id/profile

  -> Allows users to update their profile which includes their hobbies, interest and profile picture etc
  -> request Body example: {
  "hobbies": ["reading", "painting"], "interests": ["technology", "travel"], "profilePicture": "base64-encoded-image-data"
  }
  -> response example: {
  "message": "Profile updated successfully" }
  -> Send private messages:
  Endpoint: POST /"...."/messages -> Sending messages to other users
  Request Body: {
  "sender": "user123", "receiver": "user456", "message": "Hi there!"
  }

- Getting available courses for exploration:
  -> Endpoint: GET /"...."/course
  -> This gives you the available coures
  resposne: [
  {"id": 101,
  {"id": 102,
  "name": "Computer Science"}, "name": "Biology"}
  ]
  -> IF I HAVE TIME:
  Endpoint: GET /"...."/students/suggested
  This endpoint retrieves the suggested profiles of other students for the swipe
  and match feature.

### Database

Describe your data using diagrams, or
Users Table:

- user_id (Primary - username
  and the relationships between them. You can show this visually write it out.
  Key)

- email
- password
- profile_picture - university
- hobbies
- interests
- created_at
- updated_at

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.
Authentication :
-> There will be user authentication
-> User can create an account , by providing a username etc
-> This will be stored in the Users table -> User Logib:
-> Able to login with their registered email and password

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

1. Day 1-2: Project Setup and Frontend Structure
   ->Set up the React frontend project.
   ->Create basic folder structure for components, pages, and styles. ->Build the Home Page with app name and social media links.
   Day 3-4 : User registering and Login
   day 5-6: User profile:
   -> Selecting the university,courses,hobbies -> Linking with API endpoints to update the
   day 6-7:
   Swipe and match
   Fetching student from Pexels API
   Show matched students in the Matches section
   day 7-8:
   -> Create the Private Messaging page layout.
   user profile
   of the Dashboard.

-> Implement sending and receiving messages between users. day 9-10:
Refactoring code,fixing bugs,styling day 11:
Documentation and deploying

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- Dark Mode
- Group Chats
