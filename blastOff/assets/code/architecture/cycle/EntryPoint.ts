import { GameCycle, GameCycleDependencies } from "./GameCycle";

const {ccclass, property} = cc._decorator;


@ccclass
export default class EntryPoint extends cc.Component {
	private _gameCycle: GameCycle


  public start (): void {
		this._gameCycle = new GameCycle(
			new GameCycleDependencies(
			)
		)
		console.log("B")
		this._gameCycle.initGame();
		this._gameCycle.enterHub();
  }
}
