let id = 0;
let nome;
let idade;
let exame;
let raioX = 0;
let simples = 0;
let count1 = 0;
let paciente = 0;
let auxiliar1 = 0;
let menuOption = 0;
let tomografia = 0;
const vagaPessoa = { id: [], nome: [], idade: [], exame: [] };

 
    function welcome() {
      alert("Bem-Vindo(a) a clinica castelina!");
      menu();
    }

    function cadastroExame() {
      nome = prompt("Digite seu nome: \n");
      idade = Number(prompt("Digite sua idade: \n"));
      exame = Number(prompt("Digite qual tipo de exame voce deseja:\n\n1-Exame Simples\n2-Tomografia\n3-Raio X"));

      if (idade < 60) {
        vagaPessoa.id.push(id);
        vagaPessoa.nome.push(nome);
        vagaPessoa.idade.push(idade);
        vagaPessoa.exame.push(exame);
      } else if (idade >= 60) {
        vagaPessoa.id.unshift(id);
        vagaPessoa.nome.unshift(nome);
        vagaPessoa.idade.unshift(idade);
        vagaPessoa.exame.unshift(exame);
      }
      if(exame === 1){
      alert(
        "Dados do cadastro!\n\nIndice do paciente: " +
          id +
          " \nNome: " +
          vagaPessoa.nome[id] +
          " \nIdade: " +
          vagaPessoa.idade[id] +
          " \nTipo de exame: " +
          'Simples'
      );
      simples++;
    }else if(exame === 2){
      alert(
        "Dados do cadastro!\n\nIndice do paciente: " +
          id +
          " \nNome: " +
          vagaPessoa.nome[id] +
          " \nIdade: " +
          vagaPessoa.idade[id] +
          " \nTipo de exame: " +
          'Tomografia'
      );
      tomografia++;
    }else if(exame === 3){
      alert(
        "Dados do cadastro!\n\nIndice do paciente: " +
          id +
          " \nNome: " +
          vagaPessoa.nome[id] +
          " \nIdade: " +
          vagaPessoa.idade[id] +
          " \nTipo de exame: " +
          'Raio X'
      );
      raioX++;
    }else {
      alert('Digite uma opção valida!')

  }

      alert("Cadastro realizado com sucesso! ");
      id++;
      menu();
    }

    function consultarPessoa() {
      paciente = Number(prompt("Digite qual paciente você deseja pesquisar"));
      alert(
        "Nome: " +
          vagaPessoa.nome[paciente] +
          "\nIdade: " +
          vagaPessoa.idade[paciente] +
          "\nTipo de exame: " +
          vagaPessoa.exame[paciente]
      );
      menu();
    }

    function listaExames(){
      alert(`Quantidade de exames!\n\nSimpes: ${simples}\nTomografico: ${tomografia}\nRaio X: ${raioX}`);
      menu();
    }

    function menu() {
      if(vagaPessoa.nome.length >= 20) {
        alert('Acabou as vagas volte amanhã!')
        return;
      };
      menuOption = Number(
        prompt(
          `Digite uma das opções abaixo:\n1-Cadastrar pacientes\n2-Consultar pessoas\n3-Consultar lista de exames\n4-Sair do programa`
        )
      );
      if (menuOption == 1) {
        cadastroExame();
      } else if (menuOption == 2) {
        consultarPessoa();
      }else if(menuOption == 3){
        listaExames(); 
    }else if (menuOption == 4) {
        menuOption = 4;
      } else alert("Digite uma opção valida!");
    }
    welcome();
  

