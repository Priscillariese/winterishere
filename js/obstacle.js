class Obstacle {

  constructor(gameScreen) {
      this.gameScreen = gameScreen
      this.right = Math.floor(Math.random() * 300 + 70)
      this.top = 200
      this.width = 90
      this.height = 90
      this.element = document.createElement('img')

      this.element.src = './images/whitewalker2.png'
      this.element.style.position = 'absolute'

      this.element.style.width = `${this.width}px`
      this.element.style.height = `${this.height}px`

      this.element.style.top = `${this.top}px`
      this.element.style.right = `${this.right}px`

      this.gameScreen.appendChild(this.element)
  }

  move() {
      this.right += 3

      this.updatePosition();
  }

  updatePosition() {
      this.element.style.top = `${this.top}px`
      this.element.style.right = `${this.right}px`
  }
}