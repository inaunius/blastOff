import { Fsm } from "../../common/Fsm"
import { GameStates } from "../../static/enums";
import { GameOverState, GameState, HubState, InGameState, InitState, PauseGameState, QuitState, StartGameState, StopGameState } from "./States";


export class GameCycle implements GameCycleService{
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
		);

		this._fsm.onStateSwitched.addListener((state) => this.onStateSwitch.fireEvent(state))
	}

		get activeState(): GameStates {
			return this._fsm.activeState
		}

		public enterHub(): void  {

		}

		public enterGameOver(): void {

		}

		public startNewGame(): void {

		}

		public pauseGame(): void {
		}
		
		public enterShop(): void {

		}
		public closeShop(): void {

		}

		public unpauseGame(): void {

		}

		public quitGame(): void {

		}

		public initGame(): void {

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
