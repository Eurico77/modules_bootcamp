const empresa = {
  nome: "Rocketseat",
  cor: "roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    Numero: 260,
  },
};

console.log(
  `A empresa, ${empresa.nome} esta localizada em ${empresa.endereco.rua} numero ${empresa.endereco.Numero}`
);

const programadores = {
   nome: "Eurico",
   idade: 22,
   tecnologias: [
     { nome: "C++", especialidade: "Desktop" },
     { nome: "Python", especialidade: "Data Science" },
     { nome: "JavaScript", especialidade: "Web/Mobile" },
   ],
 };
 
 console.log(`o usuario ${programadores.nome} tem ${programadores.idade}
 anos, e usa a tecnologia ${programadores.tecnologias[2].nome}
 com especialidade em ${programadores.tecnologias[2].especialidade}`)
