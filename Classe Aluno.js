class Aluno{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    exibirDados(){
        console.log (`Aluno: ${this.nome}, ${this.idade} anos`);
    }
}
const aluno1 = new Aluno ("Maria", 10);
const aluno2 = new Aluno ("João", 8);
const aluno3 = new Aluno ("José", 5);
const aluno4 = new Aluno ("Bia", 12);
const aluno5 = new Aluno ("Luana", 9);

aluno1.exibirDados();
