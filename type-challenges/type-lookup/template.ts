type LookUp<T, U> = T extends { type: U } ? T : never;
//答案大多依赖于type整个属性没想到呀