import { Fsm, PayloadedState, PlainState, BasicState } from "../../common/Fsm"
import { Debugger } from "../../static/Debugger"
import { DebugLogTypes } from "../../static/Enums"
import { GameCycleDependencies, GameCycle } from "./GameCycle"


export abstract class GameState implements BasicState {
	public onExit(): void {}
}

export class InitState extends GameState implements PlainState {
	private readonly dependencies: GameCycleDependencies 
	private readonly gameCycle: GameCycle
	
	
	public constructor(dependencies: GameCycleDependencies , gameCycle: GameCycle) {
		super()
		this.dependencies = dependencies
		this.gameCycle = gameCycle
	}


	public onEnter(): void {
	}
}

export class HubState extends GameState implements PlainState {
	public onEnter(): void {
	}
}

export class StartGameState extends GameState implements PlainState {
	public onEnter(): void {
	}
}
export class InGameState extends GameState implements PlainState {
	public onEnter(): void {
	
	}
}
export class GameOverState extends GameState implements PlainState {
	public onEnter(): void {
	}
}
export class StopGameState extends GameState implements PlainState {
	public onEnter(): void {

	}
}
export class PauseGameState extends GameState implements PlainState {
	public onEnter(): void {
	}
}
export class QuitState extends GameState implements PlainState {
	public onEnter(): void {
	}
}
