This is a very basic Heroku app using Meteor that serves websockets.

     $ heroku create -b https://github.com/jordansissel/heroku-buildpack-meteor.git
     $ heroku labs:enable websockets
     $ git push heroku master
     $ heroku open
