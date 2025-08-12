import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '7800',
            database: 'db_blogpessoal',
            entities: [Postagem, Tema, Usuario],
            synchronize: true,
    };
  }
}