import {UnionPop} from "./38.UnionPop";

export default {}

type UnionToTuple<T, TT = T, R extends any[] = []> = [T] extends [R[number]] ? R : UnionToTuple<T, Exclude<TT, UnionPop<TT>>, [UnionPop<TT>, ...R]>

type a = UnionToTuple<1 | 2 | 3>                      // [1,2,3]
type b = UnionToTuple<1 | string | boolean>           // [1,string,boolean]

type c = [any | boolean] // [any]