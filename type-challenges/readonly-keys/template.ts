import { Equal } from "@type-challenges/utils";

export type GetReadonlyKeys<T> = {
    [P in keyof T as Equal<{ [Q in P]: T[P] }, { readonly [Q in P]: T[P] }> extends true ? P : never]: T[P]
  } extends infer F ? keyof F : never
  //in + as 映射语法