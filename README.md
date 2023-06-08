# Quiz-app

Creating simple quiz app with some features like time , highscore

Projects - Quiz App


## Project Overview

### The header 

The header of the application should contain two elements spaced between.

1. View Highscores 
    On clicking on the view highscores all the highscores saved in the local storage should be shown 

    Use the following classes for adding the Left hand icon `fas fa-hand-point-left fa-lg` beside the `View Highscores`. Favicon is already setup in the `<head>` element.



### Start Quiz

On clicking on the start quiz button the timer should be set to 50 seconds and the countdown of the timer should begin. 

The question as four options.

### Points 

On clicking on the correct option the question the next question should appear and correct text should be shown below the question, there will be no change in the timer it will continue to countdown

If the answer is wrong then you have to subtract 10 seconds from the current time left to answer the questions 


### Results 

If the timer reaches 0 or the user completes the questions, the box should show `All done!` and the final score of the user and should let the user enter their initials and submit. 

When submitted the the score should be added to the highscores.