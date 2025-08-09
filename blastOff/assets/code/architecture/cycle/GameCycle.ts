import { ActionEvent } from "../../common/ActionEvent"
import { Fsm } from "../../common/Fsm"
import { Debugger } from "../../static/Debugger"
import { DebugLogTypes, GameStates } from "../../static/Enums"
import { GameOverState, GameState, HubState, InGameState, InitState, PauseGameState, QuitState, StartGameState, StopGameState } from "./States"


export class GameCycle implements GameCycleService {
	public readonly onStateSwitch : ActionEvent<GameStates>
	
	private readonly _fsm: Fsm<GameState, GameStates>


	public constructor(dependencies: GameCycleDependencies) {
		this._fsm = new Fsm<GameState, GameStates>()
		this._fsm.addStates(
			[GameStates.INIT, new InitState(dependencies, this)],
			[GameStates.HUB, new HubState()],
			[GameStates.START_GAME, new StartGameState()],
			[GameStates.IN_GAME, new InGameState()],
			[GameStates.GAME_OVER, new GameOverState()],
			[GameStates.STOP_GAME, new StopGameState()],
			[GameStates.PAUSE_GAME, new PauseGameState()],
			[GameStates.QUIT, new QuitState()]
		)

		this._fsm.onStateSwitched.addListener((state) => this.onStateSwitch.fireEvent(state))
	}


	get activeState(): GameStates {
		return this._fsm.activeState
	}


	public enterHub(): void  { this.switchState(GameStates.HUB) }

	public enterGameOver(): void { this.switchState(GameStates.GAME_OVER) }

	public startNewGame(): void { this.switchState(GameStates.START_GAME) }

	public pauseGame(): void { this.switchState(GameStates.PAUSE_GAME) }

	public unpauseGame(): void { this.switchState(GameStates.IN_GAME) }

	public quitGame(): void { this.switchState(GameStates.QUIT) }

	public initGame(): void { this.switchState(GameStates.INIT) }

	private switchState(stateKey: GameStates) {
		Debugger.log(`${stateKey}`, DebugLogTypes.GAME_CYCLE)
		this._fsm.switchState(stateKey)
	}
}
	
export interface GameCycleService {
	readonly onStateSwitch: ActionEvent<GameStates>

	get activeState(): GameStates

	enterGameOver(): void
	enterHub(): void
	startNewGame(): void
	pauseGame(): void
	unpauseGame(): void
	quitGame(): void
}


export class GameCycleDependencies {

}
