declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[K in keyof T ]:T[K] extends Promise<infer O>?O:T[K]}>
//泛型一般不做只读 对象类型与数组类型只有键的区别都可以用对象表示