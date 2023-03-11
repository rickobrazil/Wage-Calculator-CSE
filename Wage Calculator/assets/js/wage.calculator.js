let r = Number(prompt('What is your houraly WAGE? '));
let w = Number(prompt('How many hours did you work on a regular Week day? '));
let s = Number(prompt('How many hours did you work on Saturday?'));
let d = Number(prompt('How many hours did you work on SUNDAY?'));
let h = Number(prompt('Type the number 8 if the day it is a federal Holiday.'));


if (w <= 8) {
    weekday = r * w; // formula if hours worked are less or equal to 8
} else {
    weekday = r * 8 + (w - 8) * r * 1.5; // formula if hours worked are greater than 8
}

let saturday = (r * s * 1.5);
let sunday = (r * d * 2);
let holiday = (h * r);

let earnings = ( weekday + saturday + sunday + holiday);
let decimalEarnings = earnings.toFixed(2);
console.log('Your earnings are: $', decimalEarnings);
document.write("Your earnings before taxes are:$ " + decimalEarnings);

if(w > 9.9){
    console.log('Extra $30 dolares for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}else if(s > 1.9){
    console.log('Extra $30 dolarßes for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}else if(d > 1.9){
    console.log('Extra $30 dolares for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}else if(h > 1.9){
    console.log('Extra $30 dolares for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}





























































//Bellow thei is just notes and tests from studing sections: 


/*
function Tabela(){
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

Tabela()
*/


//prompt("What level of CSE ar you? 1,2,3 or 4?");


// this was the part I test the weekday varible
/*
let r = Number(prompt('What is your hourly WAGE? '));
let w = Number(prompt('How many hours did you work on a regular Week day? '));
let s = Number(prompt('How many hours did you work on Saturday?'));

if (w <= 8) {
    weekday = r * w; // formula if hours worked are less or equal to 8
  } else {
    weekday = r * 8 + (w - 8) * r * 1.5; // formula if hours worked are greater than 8
  }
  
  let saturday = (r * s * 1.5);

  console.log(weekday + saturday);

*/


/*
let wages

if (w >= 8){
    wage.simple = r * w;
} else if (w < 8) {
   
    wages = r * 8 + (w - 8) * r * 1.5;

console.log(wages);
*/

/*
if( w > 9.9){
    console.log('Extra $30 dolares for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}else if( s > 1.9){
    console.log('Extra $30 dolarßes for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
*/


/*
let r = Number(prompt('What is your houraly WAGE? '));
let w = Number(prompt('How many hours did you work on a regular Week day? '));

if (w => 8){
    wages = r * w;

}else if (w <= 8) {
    wages = r * w;
} else {

    wages = r * 8;

    overtimePay = (w - 8) * r * 1.5;

    wages + overtimePay;
}
let test = wages + overtimePay;
  console.log(test);

*/


/*
let weekday = (r * w);

let earnings = ( weekday);
let decimalEarnings = earnings.toFixed(2);
console.log('Your earnings are: $', decimalEarnings);
document.write("Your earnings before taxes are:$ " + decimalEarnings);
*/


/* // part copiada so pra testar if e else if como exemplo//
if( w > 9.9){
    console.log('Extra $30 dolares for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");
}else if( s > 1.9){
    console.log('Extra $30 dolarßes for lunch money. ');
    document.write(".___(extra $30 dolares for lunch money.) ");

*/