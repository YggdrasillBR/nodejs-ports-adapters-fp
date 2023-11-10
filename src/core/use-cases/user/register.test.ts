import { pipe } from 'fp-ts/function';
import { OutsideRegister, register } from './register'
import { CreateUser } from '@/core/types/user'

const data: CreateUser = {
  username: string
  email: string
  password: string
}

const registerOk: OutsideRegister<string> = async(data) =>{
  return 'Usuario ${data.username} cadastrado con sucesso'
}

it('Deveria Cadastrar um usuario com sucessso' async() =>{
  return pipe(
    data
    register(registerOk)
    TE.map(result => expect(result).toBe('Usuario ${data.username} cadastrado con sucesso') )
  )()
}
