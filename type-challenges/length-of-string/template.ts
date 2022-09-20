type LengthOfString<
  T extends string,
  A extends any[] = []
> = T extends `${infer _}${infer R}` ? LengthOfString<R, [...A, any]> : A["length"];
//第二参数数组累加