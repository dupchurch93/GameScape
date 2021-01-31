A gamified Brainscape clone in the style of the old video game series .Hack.
# Welcome to GameScape!
### Live Link: [GameScape]

GameScape is inspired by [BrainScape] and is a studying application where users can create their own flash card decks to reviiew and save other decks to review.. 

## Technologies

#### Front End
  - React
  - Redux
  - CSS styling
  - Font Awesome library for icons
  - Hosted on Heroku
#### Back End
  - Built with Express.js
  - Uses a PostgreSQL Database
  - Sequelize.js
  - Express Validator Library
  - CSURF Library

## Features
  - Secure authentication using bcryptjs library
  - Only grants access to features studying and saving deck features to logged in users
  - Uses react and redux together to conditionally render and re-render components on state change
  - Includes protection from csrf attacks and performs front-end and back-end validation on forms


## Future Implementations
  - Search bar to filter decks
  - View decks by tags and add tags to decks
  - Increase user level as decks study

[BrainScape]: https://www.brainscape.com/

[GameScape]: https://gamescape.herokuapp.com
