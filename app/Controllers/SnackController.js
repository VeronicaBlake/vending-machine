import { ProxyState } from "../AppState.js";
import {gameService} from "../Services/GameService.js"

// function _draw(){
// let template = ""
// ProxyState.snacks.forEach(i => {
//     template += /*html*/ <button class = "btn btn success">${i.name} - ${i.price}</button>
// })
// }

function _draw(){
    document.getElementById('totalcandy').innerText = ProxyState.totalAmount.toFixed(2)
    }

export default class SnackController {
    constructor() {
        _draw()
        ProxyState.on("item", _draw)
    }
    buy(itemName){
        console.log(itemName)
    }
  }