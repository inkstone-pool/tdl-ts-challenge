type Flatten<T extends any[]> = T extends []?[]:T extends [infer A,...infer Rest]?
A extends any[] ?
[...Flatten<A>,...Flatten<Rest>]:
[A,...Flatten<Rest>]:
never
//cool 还是数组熟练点