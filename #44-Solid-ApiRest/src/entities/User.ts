import { uuid } from 'uuidv4';

export class User{
    public readonly id: string;
    
    public name: string;
    public email: string;
    public password: string;

    /*Id opcional no construtor pois pode ser um usuário já existente.*/
    constructor(props: Omit<User, 'id'>, id?: string){ /*Recebe todos os elementos de User, menos o id.*/
        Object.assign(this, props); //Passa todas as propriedades que estão em props e coloca no "this"

        if(!id){ //Caso seja um novo usuário.
            this.id = uuid();
        }
    }
}