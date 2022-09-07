What is user flow?
User lands on root page
User registers or logs in
User goes to personal page
User searches for movies via API and selects one to add to personal list - this adds movie to their "personal" database
User marks movie "thumbs up" or "thumbs down"
??User can mark movie as "Seen", "To See"??
??User to add review for movie??

Landing page
  Login - Google Auth & Local Auth
  Logout
  Register
  Do we enable a guest path?
  
After login or register
goto

Personal page:
  Search for Movie
    API returns list of movies
    User selects movie
    Movie is added to user's database
  User marks movie thumbs-up or thumbs-down
  User marks movie as seen or not-seen

Models:
  UserSchema:
    name:
    email:
    password:

  MovieSchema:
    title: API
    briefDesc: API
    rating: User supplied
    image: API
    review: User supplied
    user: User.id 


Steps:
Rename routes as we change them

Get Passport Strategy for Google Authentication and implement

full link for images from API, we add the poster_path data from the API return
https://image.tmdb.org/t/p/w500/<<poster_path>>