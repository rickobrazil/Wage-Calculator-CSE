let cse = Number(prompt('Are you a Siemens Local 3 CSE? type 1 for yes and 2 for no.'));

if(cse >= 2){
    console.log('Please perform your login to enter');
}else {
  console.log('Sorry only CSEs are allow on the Local 3 members site');

}

let userInput = prompt('Digite o seu usuario:');// Entrada de dados
let passInput = prompt('Digite a sua senha:');// Entrada de dados

let user = 'ricardo123';
let pass = '123';

if(userInput == user && passInput == pass){   
    console.log('Seja muito bem vindo');
}else {
    console.log('senha ou usuaro incorreto! Tente novamente');
}






























































//console.log(10/2)
//alert('Tem certeza que quer deletar?')
//confirm('Tem certeza que quer deletar?')
//document.write('Tem certeza que quer deletar?')

//let nome='Ronaldo';
//let email='ronaldo@gmail.com';
//let telefone= '4158329889';

//console.log(nome)
//console.log(email)
//console.log(telefone)

//let a = 2;
//let b = 10;
//let c = 44;
//let soma = a + b + c;
//console.log('O resultado da soma foi:', soma);

//let nota1 = 1.5;
//let nota2 = 2.5;
//let nota3 = 4.5;

//let media = (nota1 + nota2 + nota3) / 3;
//console.log(media.toFixed (2))

//let nota1 = Number(prompt('Digite o primeiro numero:'));
//let nota2 = Number(prompt('Digite o segundo numero'));
//let nota3 = Number(prompt('Digite o segundo numero'));

//let media = (nota1 + nota2 + nota3) / 3
//console.log('Sua nota e: ', media)



//let email = prompt('Digite seu email');
//let usuario = prompt('Digite o seu nome de usuario');

//console.log('Ola ', usuario, 'seu email e ', email);


//console.log(1<2)
//console.log(2==2)
//console.log(1==2)
//console.log(10/2*10-48==2)
//console.log((20/100)*10==2)

//console.log( 2 >= 2)
//console.log( 2 <= 2)

//let cat = false;
//let dog = true;

//console.log(dog = dog)
//console.log(dog = cat)
//console.log(dog != dog)
//console.log(cat == cat)


//if(true){
 //   console.log('E verdade')
//}
//else {
  // console.log('Nao e verdade')


//let a = 13;
//let b = 13;


//if(a <= b){
 //   console.log(a,'e igual que',b);
//}else{
 //   console.log(a, 'nao e maior que' ,b);
//}




//let idade = Number(prompt('Para entrar na festa primeiro digite sua idade:'));

//if(idade >= 18){
 //    console.log('Pode entrar');
//}else {
 //   console.log('Nao e permitida a entrada de menores de 18 anos.');

//}

/*
let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));
let nota3 = Number(prompt('Digite a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
    console.log('Aprovado');
}else if(media <= 7 && media > 5){
    console.log('Recuperacao');
}else {
    console.log('Reprovado');
}
*/


/*
let userInput = prompt('Digite o seu usuario:');// Entrada de dados
let passInput = prompt('Digite a sua senha:');// Entrada de dados



let user = 'ricardo123';
let pass = '123';

if(userInput == user && passInput == pass){   
    console.log('Seja muito bem vindo');
}else {
    console.log('senha ou usuaro incorreto! Tente novamente');
}
*/

// function Saudacao(){
//     console.log('Bom dia');
// }


// function soma(){
//     let x= Number(prompt('Digite o primeiro:'));
//     let y= Number(prompt('Digite o segundo:'));
//     let soma =(x / y);
//     console.log('O resultado da soma e:',soma);
// }

// soma();

/*function Tabela(){
    let mode = prompt('To see your hourly rate, type "table" than press enter.Or type "form" and click in OK to see the form.');
    
    if(mode == 'table'){
    let table = `
        <table class="table">
            <thead>
                <tr>
                    <th>Tech level</th>
                    <th>Hourly Rate First Shift</th>
                    <th>Hourly Rate Second Shift</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>1</th>
                    <th>$60.72</th>
                    <th>$66.79</th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>$55.22</th>
                    <th>$60.74</th>
                </tr>
                <tr>
                    <th>3</th>
                    <th>$49.81</th>
                    <th>$54.79</th>
                </tr>
                <tr>
                    <th>4</th>
                    <th>$45.65</th>
                    <th>$50.21</th>
                </tr>
            </tbody>
        </table>   
    `

        document.write(table);
    }else if(mode == 'form'){
        let form = `
        <form class="form" method="POST">
             <input type="text" name="nome" placeholder="nome completo" />
             <input type="email" name="email" placeholder="exemplo@gmail.com" />
             <input type="tel" name="telefone" placeholder="4158329889" />
             <button>Enviar</button>
        </form>   
    `

        document.write(form);
    }else {
       document.write('<h1>Welcome</h1>');
    }
}

Tabela()*/
/*
let tech1 = 60.72;
let hours = 8;
let money = tech1 * hours;
console.log('This is the total amount of money:',money)
*/


/*
if (w > 8){
    (r * w)
}


if (w <= 8) {
    // No overtime pay, just regular pay for all hours worked
    wages = r * w;
  } else {
    // Calculate regular pay for the first 8 hours
    wages = r * 8;
    // Calculate overtime pay for hours worked over 8
    overtimePay = (w - 8) * r * 1.5;
    // Add regular and overtime pay together for total wages
    wages + overtimePay;
  }
  let test = wages + overtimePay;
  console.log(test);

*/





















