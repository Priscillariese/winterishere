class Game {
    constructor() {
  
        this.startScreen = document.getElementById
            ('game-start')
        this.gameScreen = document.getElementById
            ('game-screen')
        this.gameEndScreen = document.getElementById
            ('game-over')
        this.gameWinScreen = document.getElementById('game-win')
  
    
        this.height = 500
        this.width = 1100

        this.player = new Player(this.gameScreen);
        this.obstacles = [];
        this.isGameOver = false;
        this.isGameWon = false;
        this.score = 0;
        this.lives = 3;
        this.animateId;
        this.gameStartTime = null;
    }
  
    start() {
      this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.height = `${this.height}px`;
  
      this.gameEndScreen.style.dispay="none";
      this.gameWinScreen.style.dispay="none";
  
      this.startScreen.classList.add('game-screen');
      this.startScreen.style.display = 'none';
      this.gameScreen.style.display = 'block';
  
      this.gameStartTime = Date.now();
  
      this.gameLoop();
    }
  
    gameLoop() {
      if (this.isGameOver) {
        this.endGame();
      } else if (this.isGameWon) {
        this.winGame();
      } else {
        const elapsedTime = (Date.now() - this.gameStartTime) / 1000;
        if (elapsedTime >= 15) {
          this.isGameWon = true;
          this.winGame(); // Chamada para exibir a tela de vitória
        } else {
          this.update();
          this.generateObstacle();
        }
        this.animateId = requestAnimationFrame(() => this.gameLoop());
      }
    
    
    }
  
    update() {
      this.player.move();
      const obstaclesToKeep = [];
      this.obstacles.forEach((obstacle) => {
        obstacle.move();
        if (this.player.didCollide(obstacle)) {
          obstacle.element.remove();
          this.lives -= 1;
          document.getElementById('lives').textContent = this.lives;
        } else if (obstacle.left + obstacle.width < 0) {
          obstacle.element.remove();
          this.score += 1;
          document.getElementById('score').textContent = this.score;
        } else {
          obstaclesToKeep.push(obstacle);
        }
      });
  
      this.obstacles = obstaclesToKeep;
  
      if (this.lives <= 0) {
        this.isGameOver = true;
        this.showGameOverScreen();
      }
    }

  generateObstacle() {
    if (Math.random() > 0.8 && this.obstacles.length < 5) {
      const positionYOptions = ['bottom', 'middle', 'top'];
      const randomPositionY =
        positionYOptions[Math.floor(Math.random() * positionYOptions.length)];
      const obstacle = new Obstacle(this.gameScreen, randomPositionY);
      this.obstacles.push(obstacle);
    }
  }

  endGame() {
    cancelAnimationFrame(this.animateId);

    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    document.getElementById('final-score').textContent = this.score;

    this.gameScreen.style.display = 'none';
    this.gameEndScreen.style.display = 'block';
  }

  showGameOverScreen() {
    this.gameScreen.style.display = 'none';
    this.gameEndScreen.style.display = 'block';
    document.getElementById('final-score').innerText = this.score;

    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', () => {
      this.resetGame();
      this.start();
    });
  }

  winGame() {
    cancelAnimationFrame(this.animateId);

    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    document.getElementById('final-score-win').textContent = this.score;

    this.gameScreen.style.display = 'none';
    this.gameWinScreen.style.display = 'block';

    const restartButton = document.getElementById('restart-button2');
    restartButton.addEventListener('click', () => {
      this.resetGame();
      this.start();
    });
  }

  resetGame() {
   location.reload();
  }
}
  
  
  