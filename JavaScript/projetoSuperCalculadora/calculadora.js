let count1 = 0;
let count2 = 0;
do{
    let num1 = 0;
    let num2 = 0;
    let resultadoMultiple;
    let resultado = 0;

    menuOption = Number(prompt('Digite uma das opções a seguir!\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Numero ao quadrado\n6 - Numero ao Cubo\n7 - Raiz quadrada\n8 - Sair'))

    if(menuOption <= 0 || menuOption >= 9){
        alert('Digite uma opção valida!')
        continue; 
    }

    switch (menuOption) {
        case 1:
            num1 = Number(prompt('Digite o primeiro numero da soma: '))
            num2 = Number(prompt('Digite o segundo numero da soma: '))
            resultado = num1 + num2;
            alert('Resultado: ' + resultado)
            break;
        case 2:
            num1 = Number(prompt('Digite o primeiro numero da subtração: '))
            num2 = Number(prompt('Digite o segundo numero da subtração: '))
            resultado = num1 - num2;
            alert('Resultado: ' + resultado)
            break;
        case 3:
            multipleOption = Number(prompt('Digite qual tabuada você deseja (lembrando que é de 0 a 10):'))
            count1 = 0;
            count2 = 0;
            resultadoMultiple = '';
            while(count1 <= 10){
            while(count2 <= 10){
                resultadoMultiple += `${multipleOption} x ${count1} = ${resultado}\n`
                count1++;
                count2++;
                resultado = multipleOption * count1;
            }
            alert(resultadoMultiple)
            }
            break;
        case 4:
            num1 = Number(prompt('Digite o numero da divisão: '))
            num2 = Number(prompt('Digite por quanto quer dividir: '))
            resultado = num1 / num2;
            alert('Resultado: ' + resultado)
            break;
        case 5:
            num1 = Number(prompt('Digite um numero para multiplicar ao Quadrado: '))
            resultado = num1 * num1;
            alert('Resultado: ' + resultado)
            break;
        case 6:
            num1 = Number(prompt('Digite um numero para multiplicar ao Cubo: '))
            resultado = num1 ** 3;
            alert('Resultado: ' + resultado)
            break;
        case 7:
            num1 = Number(prompt('Digite o numero para saber a raiz Quadrada: '))
            resultado = Math.sqrt(num1)
            alert('Resultado: ' + resultado)
            break;
        case 8:
        menuOption = 8;
            break;     
        }
    }while (menuOption != 8)
alert('Fim do programa!')
