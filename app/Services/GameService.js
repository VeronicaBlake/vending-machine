import { ProxyState } from "../AppState.js";


class GameService{
    pay(){
        ProxyState.totalAmount+=.25
    }
    buy(){
       let newTotal = ProxyState.totalAmount - ProxyState.snacks.price
       console.log(newTotal)
    }
}

export const gameService = new GameService