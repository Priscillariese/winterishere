window.addEventListener('load', () => {

  const startButton = document.getElementById
      ("start-button")
  const restartButton = document.getElementById
      ("restart-button")
  const instructionsButton = document.getElementById
      ('instructions-button');
  const instructions = document.getElementById
      ('instructions');
  const instructionsContent = document.querySelector
  ('.instructions-content'); /* Adicionado */



 
  function showInstructions() {
    instructionsContent.style.opacity = 1; /* Atualizado */
    instructionsContent.style.visibility = 'visible';
  }
  
  function hideInstructions() {
    instructionsContent.style.opacity = 0; /* Atualizado */
    instructionsContent.style.visibility = 'hidden';
  }
  
  instructionsButton.addEventListener('mouseover', function() {
    showInstructions();
  });
  
  instructionsButton.addEventListener('mouseout', function() {
    hideInstructions();
  });
  

  let game

  function startGame() {
    console.log('start game')
      game = new Game()
      game.start()

      document.addEventListener('keydown', event => {
          const key = event.key;
          const possibleKeyStrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
            
          if (possibleKeyStrokes.includes(key)) {
            // Update player directionX and directionY based on the key pressed
              switch (key) {
                  case "ArrowLeft":
                      game.player.directionX = -5;
                      break
                  case "ArrowUp":
                      game.player.directionY = -5;
                      break
                  case "ArrowRight":
                      game.player.directionX = 5;
                      break
                  case "ArrowDown":
                      game.player.directionY = 5;
                      break
              }

              console.log(game.player.directionX, game.player.directionY)
          }
      })

      document.addEventListener('keyup', event => {

          const key = event.key;
          const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

          if (possibleKeystrokes.includes(key)) {
             

              // Update player directionX and directionY based on the key pressed
              switch (key) {
                  case "ArrowLeft":
                  case "ArrowRight":
                      game.player.directionX = 0;
                      break
                  case "ArrowUp":
                  case "ArrowDown":
                      game.player.directionY = 0;
                      break
              }
          }
      })
  }

  startButton.addEventListener('click', function () {
    startGame()
  })

  restartButton.addEventListener('click', () => {
    location.reload()
  })
})
