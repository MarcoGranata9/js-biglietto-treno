// Dati
const distance = parseInt(prompt("Quanti km devi percorrere?"));

const age = parseInt(prompt("Quanti anni hai?"));

const ticketPrice = 0.21;
console.log(distance, age, ticketPrice);

// Logica

const totalPrice = distance * ticketPrice;

let totalPrice20 = "";

let totalPrice40 = "";

let message = `Il tuo biglietto costa: ${totalPrice.toFixed(2)} €`;

if (age < 18) {
    totalPrice20 = totalPrice - (totalPrice * 0.20)
    message = `Il tuo biglietto costa: ${totalPrice20.toFixed(2)} €` 
}
console.log(totalPrice20)

if (age >= 65) {
    const totalPrice40 = totalPrice - (totalPrice * 0.40)
    message = `Il tuo biglietto costa : ${totalPrice40.toFixed(2)} €`
}
console.log(totalPrice40)

// Output

document.getElementById("ticketprice").innerHTML = message
