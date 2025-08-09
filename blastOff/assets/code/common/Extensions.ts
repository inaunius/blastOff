export {}


declare global {
  interface Array<T> {
    removeItemAt(index: number): T
		removeItem(item: T): T
		findItemIndex(item: T): number
  }
	
	interface Map<K, V> {
		getKeyByValue(this: Map<K, V>, value: V): K | undefined
	}
}


// Array<T>
Array.prototype.removeItemAt = function<T>(this: T[], index: number): T {
  if (index < 0 || index >= this.length) {
    throw new Error(`Index ${index} out of bounds!`)
  }
  return this.splice(index, 1)[0]
};

Array.prototype.removeItem = function<T>(this: T[], item: T): T {
	let idx = this.findItemIndex(item)
	
	if (idx == -1) 
		throw new Error(`Item ${item} is not presented in the array ${this}!`)

	return this.removeItemAt(idx);
};

Array.prototype.findItemIndex = function<T>(this: T[], item: T): number {
	return this.findIndex((currentItem, _) => currentItem == item )
}

// Map<K, V>
Map.prototype.getKeyByValue = function<K, V>(this: Map<K, V>, value: V): K | undefined {
	let entries = this.entries();
  let entry = entries.next();
  while (!entry.done) {
    if (entry.value[1] === value)
      return entry.value[0];
    
		entry = entries.next();
  }
  return undefined;
};
