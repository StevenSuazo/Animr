# Animr [Live Link](http://fullstack-animr.herokuapp.com/#/) 

'Animr' is a clone of the popular website Flickr, an online photo management and sharing application. With Animr user are able to show off their favorite anime based photos to the world, view others photos, comment on other's photos and much more.

![Splash](https://github.com/StevenSuazo/Animr/blob/main/app/assets/images/splash.gif)

## Technologies Used

This Heroku hosted website built with a Ruby on Rails Backend using RESTful API Routing, and the React, Javascript and Redux technologies for the Frontend. The database is handled with PostgreSQL and AWS (Amazon S3).

## Unique Features

### Responsive Explore Page

The Explore page is able to load all the photos on the database and have them fit evenly within the page container regardless of their size. Landscape photos will adjust their width as Portrait photos adjust their height dependent on the size of the browser window. 

![Feature 1](https://github.com/StevenSuazo/Animr/blob/main/app/assets/images/feature1.gif)

### Show Password Toggle

![Feature 1](https://github.com/StevenSuazo/Animr/blob/main/app/assets/images/feature2.png)
```  toggleHidePass(event) {
    event.preventDefault();
    let pass = document.getElementsByClassName('pinput');
    if (pass[0].type === "text") {
      pass[0].type = "password";
      this.setState({ visibility: "visibility" })
    } else {
      pass[0].type = "text";
      this.setState({ visibility: "visibility_off" })
    }
  }
```
