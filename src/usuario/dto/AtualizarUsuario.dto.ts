import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validation/email-eh-unico.validator";

export class AtualizarUsuarioDTO {

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailEhUnico({ message: 'Já existe um usuário com esse e-mail!' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}