import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}
    
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists){ //Verifica se o usuário já existe.
            throw new Error('User already exists.');
        }

        const user = new User(data); //Se não existir, cria um novo usuário.

        await this.usersRepository.save(user); //Salva esse novo usuário.

        /*Envia um email confirmando o cadastro do usuário.*/
        await this.mailProvider.sendMail({
            to:{
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Equipe Teste",
                email: "equipe@teste.com",
            },
            subject: 'Seja bem-vindo/1',
            body: '<p>Você foi cadastrado com sucesso.</p>'
        })
    }
}