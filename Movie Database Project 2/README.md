# Group Project - Movie Database

## Overview
This is our movie database project where we created a simple web app that allows you to view, add, edit, and delete different movies. You can check out movies, view details about them, and make changes as needed. The app is designed with a clean interface that allows you to easily manage movies in your collection.

## Steps to Start the Project
To run the project, follow these steps:

1. **Extract the ZIP file** 
First, download the project ZIP file and extract it.

2. **Install dependencies** 
Once you’ve extracted the project, navigate to the project folder in your terminal. Then, install all necessary dependencies by running:
   ```
   npm install
   ```
3. **Start the project** by running the following command:
   ```
   node app.js
   ```
   This will start the app in your browser at `http://localhost:3000`.

## How to Navigate the App
Once the server is running, open a web browser and go to `http://localhost:3000`. You’ll see the homepage with the list of group members and a button to check out our favourite movies(the fake movie database).

## Pages in the app
- **Home Page**: This shows the group members(us) and an overview of the project. From here, you can go to the page with our favourite movies(the page with all the movies).
- **Page with all the movies**:  On this page, you'll see all the movies we’ve added.On the top of the page, there is an "Add new movie" button that can take you to the page where you can add new movies. On the bottom of the page there is a "Back "button that can take you to the home page with the group overview.
- **Add movie**: This page allows you to add a new movie to the list(database). Fill out the form and click submit to add it.
- **View movie**: When you click the "View details" button of a movie, you can see details about a specific movie like title, year, genre, and description.
- **Edit Movie**: If you need to update a movie’s information, you can do that when clicking the “Edit” button of the movie you want to change.
- **Delete Movie**: When you want to delete a movie from the list, just click the "Delete" button of the movie.
- **Back button**: There are "Back" buttons in the View, Edit, and Create pages to help you navigate back to the page with all the movies. 

## Folder structure
- **/views**: Contains all the EJS template files for rendering the pages.
- **/public**: This is where the static files (like CSS and images) are stored.
- **/routes**: Contains the route files for different pages ( index.js, users.js).
- **/controllers**: Contains the controller functions that handle logic for different routes.
- **/models**: Contains the data models (in this case, the array of movies).

