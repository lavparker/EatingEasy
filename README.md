# EatingEasy 

## Description 

EatingEasy is a clone of OpenTable, a well known restaurant reservation app used around the world. Users of the app can browse the app and view details of restaurants. A logged in user is able to create, edit and delete reservations. (The logged in user will also be able to create, edit and delete their own reviews, save and remove their favorite restaurants and see their past reservations via their user profile page.)

Check out EatingEasy [here!] (https://eatingeasy.herokuapp.com/#/)

To use the eating easy app: 

## Technologies, Libraries, APIs 

- Ruby on rails used on the backend
- PostgreSQL for the database
- React, Redux, and Javascript for the frontend
- AWS Cloud Storage for photo rendering 
- This project will also include the Google maps API in the future 

## Functionality 

### User Auth
      New users are able input their information in order to sign-up, for an account via a signup modal. 
      Users who already have signed up are able to log in via a login modal. The appropriate error(s) are rendered for any sign-up or login errors.  
    
### RestaurantIndex 
     The restaurant index is viewable on the splash page for users who are both logged in and logged out. The restaurant index contains animated restaurant cards that link directly to the restaurant's show page. 

### Restaurant Show 
     The restaurant show page gives details specific to the restaurant such as, hours, address, phone number, cuisine, website, etc. The if logged in, the user can also create a reservation from the restaurant show page. 

### Reservations 
     If logged in, the user is able to create reservations by selecting the party size, date and time. The user is also able to delete reservations via their respective user reservation show page.   

### User Show 
     The user show page allowes a logged in user to view their current reservations. The user is also able to delete their reservations via the user show page. 

## Future Updates 
     In the near future, I would like to enhance the user experience by adding a dynamic search bar to the splash page so that users can find available restaurants. I would also like to improve the display of user show page, allow users to update their reservations, build out reviews (using CRUD) and allow a user to rate and favorite restaurants that they've had reservations at. 