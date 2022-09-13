type DeepReadonly<T> = {
    readonly [P in keyof T]:T[P] extends Function ? T[P] : P extends Object? DeepReadonly<T[P]>:T[P];
}
