export class ServiceLocator<TServiceTag> {
  private readonly _services: Map<TServiceTag, Object> = new Map<TServiceTag, Object>();


  public bind<TService>(instance: TService, tag: TServiceTag): void {
    if (this.isBound<(tag))
      throw new Error(`Trying to bind already bound service: ${tag}!`);

    this._services.set(tag, instance);
  }

  public rebind<TService>(instance: TService , tag: TServiceTag): void  {
    if (!this.isBound(tag))
      throw new Error(`Trying to rebind ${tag}, but it's not bound!`);

    this._services.set(tag, instance);
  }

  public unbind<TService>(tag?: TServiceTag): void {
    if (!this.isBound(tag))
      throw new Error(`Trying to unbind ${tag}, but it's not bound!`);

    this._services.delete(tag);
  }

  public get<TService>(tag: TServiceTag): TService {
    if (!this.isBound(tag))
      throw new Error(`Trying to get ${tag}, but it's not bound!`);

    return this._services.get(tag) as TService;
  }

  private isBound(tag: TServiceTag): boolean {
    return this._services.has(tag)
	}
}
