"use strict";
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
}
// Classe Exemplar
class Exemplar {
    isbn;
    titulo;
    autor;
    ano;
    constructor(isbn, titulo, autor, ano) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getAno() {
        return this.ano;
    }
    getIsbn() {
        return this.isbn;
    }
}
class Emprestimo {
    livro;
    usuario;
    dataEmprestimo;
    dataPrevistaDevolucao;
    constructor(li, ps) {
        this.livro = li;
        this.usuario = ps;
        this.dataEmprestimo = new Date();
        this.dataPrevistaDevolucao = new Date();
        this.dataPrevistaDevolucao.setDate(this.dataEmprestimo.getDate() + 15);
    }
    obterDataEmprestimo() {
        return this.dataEmprestimo.toLocaleDateString();
    }
    obterDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao.toLocaleDateString();
    }
    obterDadosEmprestimo() {
        return `Livro: ${this.livro.getTitulo()} | Usuário: ${this.usuario.getNome()}`;
    }
}
// Teste
let pessoa1 = new Pessoa("Sara", "123.456.789-00");
let livro1 = new Exemplar("54321", "Jantar Secreto", "Rafael Montes", 1881);
let emp1 = new Emprestimo(livro1, pessoa1);
console.log(emp1.obterDadosEmprestimo());
console.log(emp1.obterDataPrevistaDevolucao());
