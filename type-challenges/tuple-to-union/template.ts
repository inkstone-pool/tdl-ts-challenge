type TupleToUnion<T extends (string|number|symbol|boolean)[]> = T[number]