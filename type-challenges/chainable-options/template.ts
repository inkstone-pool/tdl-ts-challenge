type CheckKey<K extends string, V, O> = K extends keyof O
  ? O[K] extends V ? { error: `Key '${K}' already exists` } : K
  : K

type Chainable<O = {}> = {
  option<K extends string, V>(key: CheckKey<K, V, O>, value: V): Chainable<Omit<O, K> & { [key in K]: V }>
  get(): O
}
//answer is cool omg