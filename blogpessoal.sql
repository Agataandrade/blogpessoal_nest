DROP DATABASE db_blogpessoal;
CREATE DATABASE db_blogpessoal;   
USE db_blogpessoal;

CREATE TABLE tb_postagens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    texto TEXT NOT NULL,
    titulo VARCHAR(255) NOT NULL
);

INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 01', 'Postagem 01');
INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 02', 'Postagem 02');

SELECT * FROM tb_postagens;






