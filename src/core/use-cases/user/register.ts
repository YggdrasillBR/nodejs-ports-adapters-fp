import { OutsideRegister } from './register';
import { CreateUser } from './../../types/user'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import * as E from "fp-ts/Either"

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

type Register = <A>(outsideRegister: OutsiderRegister<A>) => (data: CreateUser) => TE.TaskEither<Error, A>

export const register = (OutsiderRegister) => (data) =>{
  return pipe(
    TE.try {
      () => OutsiderRegister(data)
    } catch (error) {
      E.toError
    }
    }
  )
}
