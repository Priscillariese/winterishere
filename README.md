# THE RETURN OF FROZEN SHADOWS

## Description
###### In The Return of Frozen Shadows, play as Snow and avoid the enemies, Frozen Shadows. Move horizontally and use the arrow keys to control Snow. Can you dodge the shadows and save Winterfell? Embark on this frosty adventure now!


## MVP (DOM) 
###### A character will move horizontally across the screen.
###### Enemies will appear randomly from the front of the screen.
###### The player starts with 3 lives to evade the enemies.
###### To save Winterfell and complete the game, the player must survive and achieve a score of 10 points.
###### If the player gets hit by enemies, the game will end.

## Backlog
###### The game will feature a scoreboard displaying the player's remaining lives and current score.
###### Successfully evading enemies will increase the score incrementally until reaching a maximum of 10 points.
###### Each time the player collides with an enemy, their remaining lives will decrease from 3 to 0
###### Restart after you win or lose

## Data structure
** Script.js **
- function showInstructions() {}
- function hideInstructions(){}
- function startGame(){}

** game.js **
- class Game {}
- start()
- gameLoop() {}
- update() {}
- generateObstacle
- endGame
- showGameOverScreen() {}
- winGame(){}
- resetGame(){}

** player.js **
- class Player {}
- constructor(gameScreen){}
- move(){}
- updatePosition{}
- didCollide(){}

 ** obstacle.js **
- class Obstacle {}
- calculatePositionY(){}
- move(){}
- updatePosition(){}

## TASK
- Create HTML
- Create CSS
- Create JS
- Create background
- Create player
- Create obstacles
- Move player
- Move obstacles
- Create restart

## ADITIONAL LINKS
