export const ID = <L extends keyof any & string = string>(literal: L) => literal

export type ID<X extends keyof any & string = string> = X
