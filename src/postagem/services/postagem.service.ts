import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.emtity";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { Injectable } from "@nestjs/common";
import { promises } from "dns";

@Injectable()
export class PostagemService{
postagemService: any;
findAll(): Promise<Postagem[]> {
    throw new Error("Method not implemented.");
}
findByTitulo(titulo: string): Promise<Postagem[]> {
    throw new Error("Method not implemented.");
}
constructor(
    @InjectRepository(Postagem)
private postagemRepository:Repository<Postagem>
){}    

async finAll(): Promise<Postagem[]>{
    return await this.postagemRepository.find();
}

async findById(id: number): Promise<Postagem>{
    const postagem = await this.postagemRepository.findOne({
        where:{
            id
        }
    });

    if(!postagem)
        throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);

    return postagem;
}

async findAllByTitulo (titulo: string): Promise<Postagem[]>{
return await this.postagemService.findById({
    where:{
        titulo:ILike('%${titulo}%')
}
})
}

async create(Postagem: Postagem) : Promise<Postagem>{
    return await this.postagemRepository.save(Postagem);
}

async update(postagem: Postagem): Promise<Postagem>{
    await this.findById(postagem.id)
    return await this.postagemRepository.save(postagem);
}

async delet(id: number): Promise<DeleteResult>{
    await this.findById(id)
    return await this.postagemRepository.delete(id)
}

}