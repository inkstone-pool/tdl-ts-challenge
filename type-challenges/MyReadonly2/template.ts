import type{GetReadonlyKeys} from '../readonly-keys/template'
export type MyReadonly2<T extends Object, K extends keyof T=keyof T> ={
  readonly [P in K]:T[P]
}& MyOmit<T, K>
//MyOmit排除键