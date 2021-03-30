import GameController from './Controllers/GameControllers.js'

class App {
  gameController = new GameController();
}

window["app"] = new App();
