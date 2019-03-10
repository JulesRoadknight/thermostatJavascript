# Bowling Challenge

# Setup

- Jasmine template installed into main folder

# Process

TEST
Jasmine unit test expecting bowling.score to be an array

ERROR
(Bowling not defined)

RED
Made Bowling function

ERROR
(Expected undefined to equal [])


TEST
Jasmine unit test expecting bowling.roll to start at 1

ERROR
(Expected undefined to be 1)

GREEN
Defined bowling.roll


TEST
Jasmine unit test expecting bowling.frame to start at 1

ERROR
(Expected undefined to be 1)

GREEN
Defined bowling.frame


TEST
Jasmine unit test expecting bowling.addScore to add a number to this.score

ERROR
(Expected [] to contain 5)

GREEN
Made bowling.addScore push a number to this.score array


TEST
Jasmine unit test expecting bowling.addScore to increment this.roll

ERROR
(Expected 1 to equal 2)

GREEN
Made addScore increment


TEST
Jasmine unit test expecting bowling.addScore to increment this.roll by 2 if strike

ERROR
(Expected 2 to equal 3)

GREEN
Added if statement to addScore so strikes increment by 2


TEST
Jasmine unit test expecting bowling.rollMax to equal 20

ERROR
(Expected undefined to equal 20)

GREEN
Made rollMax = 20


TEST
Jasmine unit test expecting bowling.frameMax to equal 10

ERROR
(Expected undefined to equal 10)

GREEN
Made frameMax = 10


TEST
Jasmine unit test expecting bowling.rollMax to increase if turn 19 is a strike

ERROR
(Expected 20 to equal 21)

GREEN
Added a check19 function that increments rollMax if strike


REFACTOR
Added an extra condition to addScore to prevent skipping rolls on the final frame


  Scoring in bowling is the most difficult algorithm owing to strikes and spares.


TEST
Jasmine unit test expecting the game to end when the turn limit is exceeded.

ERROR
(Expected undefined to equal 'Game Over')

RED
Defined this.status

ERROR
(Expected '' to equal 'Game Over')

GREEN
Made this.status equal 'Game Over' once turn limit was reached


TEST
Jasmine unit test checking the functionality of Game Over, even when turn limit is extended.

GREEN



THINKING ABOUT SCORING


  ROLLS 1 2 3 4 5 6 7 8 9 10  11  12  13  14  15  16  17  18  19  20  (21)
  FRAME 1   2   3   4   5     6       7       8       9       10

  Score of frame algorithm is roll[2 * frame.position] + roll[2 * frame.position - 1]

  If frame[x].score == 10
    if roll[2 * frame.position - 1] == 10
      strike, and strike rules
      frame.score.push(strike)
    else
      spare


    Either implement above check as part of scoring function, or as a separate function called in scoring function


  To implement strike score:
  Put a new function at the top of addScore that uses similar syntax to above to check if 2 rolls back has a strike, and if 1 roll back has a spare, and if so adds the appropriate amount
