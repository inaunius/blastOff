import { ActionEvent } from "./ActionEvent";


export class Fsm<TState extends BasicState, TStateKey> {
	public readonly onStateSwitched : ActionEvent<TStateKey> = new ActionEvent<TStateKey>()
	
	private _states: Map<TStateKey, TState> = new Map<TStateKey, TState>;
	private _activeState: TState 


	get activeState(): TStateKey {
		return this._states.getKeyByValue(this._activeState)
	}

	
	public addStates(...keysAndStates: [TStateKey, TState][] ): void {
	  keysAndStates.forEach((keyAndstate) => {
			const [key, state] = keyAndstate
			this._states.set(key, state)
		})
	}

	public switchState(key: TStateKey): void
	public switchState<TPayload>(key: TStateKey, payload: TPayload): void
	public switchState<TPayload>(key: TStateKey, payload?: TPayload): void {
		this._activeState?.onExit()
		this._activeState = this._states.get(key)

		if (payload != undefined)
			(this._activeState as unknown as PayloadedState<TPayload>).onEnter(payload)
		else 
			(this._activeState as unknown as PlainState).onEnter()
	}
}	

export interface BasicState {
	onExit(): void
}

export interface PayloadedState<TPayload> extends BasicState {
	onEnter(payload: TPayload): void
}

export interface PlainState extends BasicState {
	onEnter(): void
}
