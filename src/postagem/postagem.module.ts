import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.emtity";
import { PostagemController } from "./services/controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";

@Module({

    imports:[TypeOrmModule.forFeature([Postagem])],
    controllers:[PostagemController],
    providers:[PostagemService],
    exports:[],
})
export class PostagemModule{}