
export class UsuarioEntity {
  id: string;

  // @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  // @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  // @EmailEhUnico({ message: 'Já existe um usuário com esse e-mail!' })
  email: string;

  // @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}