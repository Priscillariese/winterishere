class Game {
  constructor() {

      this.startScreen = document.getElementById
          ('game-start')
      this.gameScreen = document.getElementById
          ('game-screen')
      this.gameEndScreen = document.getElementById
          ('game-over')

      this.player = null;
      this.height = 100
      this.width = 100
      this.player = new Player(this.gameScreen)
      this.obstacle = [new Obstacle(this.gameScreen)]
      this.isGameOver = false
      this.score = 0
      this.lives = 3
  }

  start() {
      this.gameScreen.style.width = `${this.width}vw`
      this.gameScreen.style.height = `${this.height}vh`

      this.startScreen.style.display = 'none'
      this.gameScreen.style.display = 'block'

      this.gameLoop()
  }

  gameLoop() {
      this.update()

      if (Math.random() > 0.98 && this.obstacle.length < 1) {
          this.obstacle.push(new Obstacle(this.gameScreen));
      }


      if (this.isGameOver) {
          console.log('GameOver')
      }
      requestAnimationFrame(() => this.gameLoop())
  }

  update() {
      this.player.move()
      const obstacleToKeep = []
      this.obstacle.forEach(obstacle => {
          obstacle.move()
          if (this.player.didCollide(obstacle)) {
              obstacle.element.remove();
              this.lives -= 1
          } else if (obstacle.right > this.gameScreen.offsetHeight) {
              this.score += 1
          } else {
              obstacleToKeep.push(obstacle)
          }
      })

      this.obstacle = obstacleToKeep;

      if (this.lives <= 0) {
          this.isGameOver = true
      }
  }
}