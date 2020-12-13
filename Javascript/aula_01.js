const alunos = [
     {nome: 'eurico', nota: 10},
     {nome: 'andre', nota: 6},
     {nome: 'julio', nota: 5}, 
     {nome: 'marcos', nota: 7},
     {nome: 'julia', nota: 9},
     {nome: 'ana', nota: 5.5},
     {nome: 'denis', nota: 9.5},
     {nome: 'joao', nota: 10},
]

const verificar = alunos => alunos.filter(
   aluno => aluno.nota > 7 ? `Parabéns, ${aluno.nome}`: `Não foi dessa vez, ${aluno.nome}` 
);

const result = verificar(alunos)

console.log(result);