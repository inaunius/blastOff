import { ServiceLocator } from "../common/ServiceLocator";
import { GameCycleServiceTags, PublicServiceTags, UtilsServiceTags } from "./enums";


export class Sl {
	public static readonly publicServices: ServiceLocator<PublicServiceTags> = new ServiceLocator<PublicServiceTags>()
	public static readonly gameCycleServices: ServiceLocator<GameCycleServiceTags> = new ServiceLocator<GameCycleServiceTags>()
	public static readonly utilsServices: ServiceLocator<UtilsServiceTags> = new ServiceLocator<UtilsServiceTags>()
}