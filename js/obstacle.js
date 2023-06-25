class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen
      this.left = Math.floor(Math.random() * 300 + 70)
      this.top = -150
      this.width = 80
      this.height = 150
      this.element = document.createElement('img')
  
      this.element.src = './images/whitewalker2'
      this.element.style.position = 'absolute'
  
      this.element.style.width = `${this.width}px`
      this.element.style.height = `${this.height}px`
  
      this.element.style.top = `${this.top}px`
      this.element.style.left = `${this.left}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.top += 3
  
      this.updatePosition()
    }
  
    updatePosition() {
      this.element.style.top = `${this.top}px`
      this.element.style.left = `${this.left}px`
    }
  }