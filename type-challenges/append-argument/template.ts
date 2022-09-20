type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (...args:infer R)=> infer S ?
{
    (...args:[...R,A]):S
}:never