    let hit = 0; 
    let life = 0;
    let contador = 0;

    let nomePersonagem1 = prompt('Digite o nome do personagem A: ')
    let nomePersonagem2 =  prompt('Digite o nome do personagem B: ') 

    while(nomePersonagem1 == nomePersonagem2) nomePersonagem2 = prompt('Digite o nome diferente do jogador A\nDigite o nome do personagem B: ')

    alert('Bem-vindo Jogador A: ' + nomePersonagem1);
    alert('Bem-vindo Jogador B: ' + nomePersonagem2);

    let opcao1 = parseInt(prompt('Digite a opção se o jogador B deseja escudo: 1 - Sim  2 - Não'))

    if(opcao1 == 1){
    
        alert('O escudo do Jogador B será metade do ataque do Jogador A!')
        life = parseFloat(prompt('Jogador B \nDefina o tamanho do Hp: '));
        

    do{
        
        hit = parseFloat(prompt ('Jogador A \nDefina o valor do seu dano'))
        hit = hit/2;
        alert('O ataque do Jogador A deu ' + hit + ' de dano ')
        life = life - hit;
        alert('A vida do Jogador B ficou com: ' + life + ' de Hp')

        let opcao2 = parseFloat(prompt('Jogador A\nDeseja continuar atacando? 1 - Sim 2 - Não'))
        
        if(opcao2 == 1){
            life = life;
            contador = contador + 1;
            alert('Rodada ' + contador + ' Finalizada');
        }
        else if(opcao2 == 2){
            life = 0;
            contador = contador + 1;
            alert('Rodada ' + contador + ' Finalizada');

        }else alert('Error')
       
    }while(life > 0)
    }

    else if(opcao1 == 2){
        life = parseFloat(prompt('Jogador B \nDefina o tamanho do Hp: '));
        do{
            hit = parseFloat(prompt ('Jogador A \nDefina o valor do seu dano'))
            alert('O ataque do Jogador A deu ' + hit + ' de dano ')
            life = life - hit;
            alert('A vida do Jogador B ficou com: ' + life + ' de Hp')

            let opcao2 = parseFloat(prompt('Jogador A\nDeseja continuar atacando? 1 - Sim 2 - Não'))
        
        if(opcao2 == 1){
            life = life;
            contador = contador + 1;
            alert('Rodada ' + contador + ' Finalizada');
        }
        else if(opcao2 == 2){
            life = 0;
            contador = contador + 1;
            alert('Rodada ' + contador + ' Finalizada');
        }else alert('Error')
        }while(life > 0)
    }
 alert('Fim de Jogo!')
