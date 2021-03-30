import { ProxyState } from "../AppState.js";


class GameService{
    pay(){
        ProxyState.totalAmount+=.25
    }
    buy(){
        ProxyState.totalAmount - ProxyState.snacks.price
    }
}

export const gameService = new GameService