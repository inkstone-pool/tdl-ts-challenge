
type Permutation<T, A = T> = [T] extends [never]
  ? []
  : T extends A
    ? [T, ...Permutation<Exclude<A, T>>]
    : never
//extends太妙了