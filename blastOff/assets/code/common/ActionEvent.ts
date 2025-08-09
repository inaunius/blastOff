class ActionEvent<TPayload> {
  private _listeners: { (data: TPayload): void }[] = []


  public addListener(listener: { (data: TPayload): void }): void {
    this._listeners.push(listener)
  }

  public removeListener(listener: { (data: TPayload): void }): void {
    this._listeners.removeItem(listener)
  }

	public fireEvent(payload: TPayload): void {
		this._listeners.forEach((listener) => listener.call(payload))
	}
}