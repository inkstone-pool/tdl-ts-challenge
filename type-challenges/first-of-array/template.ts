// type First<T extends any[]> = T extends []?never:T[0]
type First<T extends any[]> = T extends [infer a,...infer rest]?a: never
type Last<T extends any[]> = T extends [...infer rest,infer a,]?a: never