class Player {

    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.with = 150
        this.height = 120
        this.top = 300
        this.left = 50
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
  
        this.element.src ='./images/snow.png'
        this.element.style.position = 'absolute'
  
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
  
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
  
        this.gameScreen.appendChild(this.element)
    }
  
    move() {
        this.left += this.directionX;
        this.top += this.directionY;
    
  
        this.updatePosition();
    }
  
    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }
  
    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
  
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
          console.log("true");
          
            return true;
        } else {
          console.log("false");
            return false;
        }
    }
  }