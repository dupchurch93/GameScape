A gamified Brainscape clone in the style of the old video game series .Hack.
# Welcome to GameScape!
### Live Link: [GameScape](https://gamescape.herokuapp.com/)

GameScape is inspired by [BrainScape] and is a studying application where users can create their own flash card decks to reviiew and save other decks to review..

## Home Page
![GameScapeHome.png](https://raw.githubusercontent.com/dupchurch93/GameScape/main/frontend/public/GameScapeHome.png)

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
  - Uses React / Redux to conditionally render and save user scores while studying
  - Includes protection from csrf attacks and performs front-end and back-end validation on forms
  - Searching for new decks using similar tags
  - Saving and creating decks to study for later
  - Record tracking of average and high scores for each deck

## Code Snippets
User scores are kept recorded after each question is answered, along with their top and higher scores. The new average score is calculated as the last study card is answered based on previous average and times the deck has been studied. 
```js
const askRandomQuestion = useCallback(() => {
    if (!studyingBegan) {
      setStudyingBegan(true);
    }
    if (unansweredQuestions.length === 0) {
      setFinishedState(true);
      const calcScore = currentScore + 1;
      const averageScore = deck.averageScore || 0;
      const bestScore = deck.bestScore || 0;
      const timesStudied = deck.timesStudied || 0;
      const newAverageScore = (averageScore*timesStudied + calcScore)/(timesStudied+1);
      deck.averageScore = newAverageScore;
      deck.timesStudied = timesStudied + 1;
      if (bestScore < calcScore) {
        deck.bestScore = calcScore;
      };
      dispatch(updateDeckScoreThunk(deck));
      return;
    }
    const questionIndex = Math.floor(
      Math.random() * unansweredQuestions.length
    );
    const question = unansweredQuestions[questionIndex];
    const newUnansweredQuestionsArray = [
      ...unansweredQuestions.slice(0, questionIndex),
      ...unansweredQuestions.slice(questionIndex + 1, questionIndex.length),
    ];
    setAnsweredState(false);
    setUnansweredQuestions(newUnansweredQuestionsArray);
    setCurrentQuestion(question);
  }, [unansweredQuestions, studyingBegan, currentScore, dispatch, deck]);
```


## Future Implementations
  - Deck Review and Comments


[BrainScape]: https://www.brainscape.com/

[GameScape]: https://gamescape.herokuapp.com
