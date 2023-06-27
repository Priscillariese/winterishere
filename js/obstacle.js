class Obstacle {
    constructor(gameScreen, positionY) {
      this.gameScreen = gameScreen;
      this.width = 100;
      this.height = 100;
      this.element = document.createElement('img');
      this.element.src = './images/whitewalker.png';
      this.element.style.position = 'absolute';
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.directionX = -1; // Todos os obstáculos se movem da direita para a esquerda
      this.positionY = positionY; // Posição vertical inicial do obstáculo
  
      this.left = this.gameScreen.offsetWidth; // Posição horizontal inicial no lado direito do gameScreen
      this.top = this.calculatePositionY(); // Posição vertical aleatória com base na posição Y especificada
  
      this.gameScreen.appendChild(this.element);
    }
  
    calculatePositionY() {
      const screenPadding = 50; // Espaçamento entre o obstáculo e a borda superior/inferior do gameScreen
      const screenHeight = this.gameScreen.offsetHeight - 1 * screenPadding;
      let positionY;
  
      if (this.positionY === 'bottom') {
        positionY = Math.floor(Math.random() * (screenHeight / 2) + screenHeight * (1 / 2)) + screenPadding;
      } else if (this.positionY === 'middle') {
        positionY = Math.floor(Math.random() * (screenHeight / 1) + screenHeight / 1) + screenPadding;
      } else if (this.positionY === 'top') {
        positionY = Math.floor(Math.random() * (screenHeight / 2)) + screenPadding;
      }
  
      return positionY;
    }
  
    move() {
      const speed = 3; // Velocidade de movimento do obstáculo
  
      // Atualiza a posição horizontal com base na direção e velocidade
      this.left += this.directionX * speed;
  
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
    }
  }