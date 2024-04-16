import { ListaUsuarioDTO } from './../dto/ListaUsuario.dto';
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "src/usuario/repositories/usuario.repository";
import { CriaUsuarioDTO } from "../dto/CriaUsuario.dto";
import { UsuarioEntity } from "../entities/usuario.entity";
import { v4 as uuid } from 'uuid';
import { AtualizarUsuarioDTO } from '../dto/AtualizarUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return {
      id: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário criado com sucesso!'
    };
  }

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );

    return usuariosLista;
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() dadosParaAtualizar: AtualizarUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualiza(id, dadosParaAtualizar);

    return {
      usuario: usuarioAtualizado,
      message: 'Usuário atualizado com sucesso!'
    }
  }
}