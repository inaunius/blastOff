import { DebugLogTypes as DebuggerLogTypes, DebugLogTypes } from "./Enums";


export class Debugger {
	private static readonly LOG_TYPES_CONFIG = new Map([
		[DebugLogTypes.MISK, true],
		[DebugLogTypes.GAME_CYCLE, true]		
	])


	public static log(msg: string, type: DebuggerLogTypes) {
		if (this.LOG_TYPES_CONFIG.get(type))
			console.log(`${DebuggerLogTypes[type]}: ${msg}`)
	}
}