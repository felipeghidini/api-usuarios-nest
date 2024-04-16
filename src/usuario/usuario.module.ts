import { Module } from "@nestjs/common";
import { UsuarioController } from "./controllers/usuario.controller";
import { UsuarioRepository } from "./repositories/usuario.repository";
import { EmailEhUnicoValidator } from "./validation/email-eh-unico.validator";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator]
})

export class UsuarioModule {}