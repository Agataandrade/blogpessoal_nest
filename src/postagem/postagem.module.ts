import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.emtity";

@Module({

    imports:[TypeOrmModule.forFeature([Postagem])],
    controllers:[],
    providers:[],
    exports:[],
})
export class PostagemModule{}