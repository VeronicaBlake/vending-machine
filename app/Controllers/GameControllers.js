import { ProxyState } from "../AppState.js";
import {gameService} from "../Services/GameService.js"

function _draw(){
document.getElementById('totalamount').innerText = ProxyState.totalAmount.toFixed(2)
}

export default class GameController {
    constructor() {
        ProxyState.on('totalAmount', _draw);
        ProxyState.on('snacks.price', _draw);
        _draw()
    }
    pay(){
        gameService.pay()
    }
    buy(){
        gameService.buy()
    }
    
  }