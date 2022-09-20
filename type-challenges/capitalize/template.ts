
type MyCapitalize<S extends string> =S extends `${infer fisrt}${infer C}`?`${Uppercase<fisrt>}${C}`:S