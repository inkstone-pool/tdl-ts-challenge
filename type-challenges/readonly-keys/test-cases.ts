import type { Equal, Expect } from '@type-challenges/utils'
import type{GetReadonlyKeys} from './template'
type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]
type a= GetReadonlyKeys<Todo1>
interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}