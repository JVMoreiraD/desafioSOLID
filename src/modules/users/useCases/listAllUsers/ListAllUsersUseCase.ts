/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userIsAdmin = this.usersRepository.findById(user_id)
    if (!userIsAdmin) {
      throw new Error("Usuário não existe")
    }
    if (!userIsAdmin.admin) {
      throw new Error("Usuário não tem permissão de listar")
    }
    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
