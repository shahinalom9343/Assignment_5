const buttonString = document.getElementsByClassName('seat');
let totalAmount = 0;
let bookedSeat =0;
// console.log(buttonString)
for(let i=0;i<buttonString.length;i++){
  const buttonSingle = buttonString[i];
  const button = buttonSingle.innerText;
  // console.log(buttonSingle);
 
  buttonSingle.addEventListener("click", function(){
    // console.log(button);
    const ticketAreaContainer = document.getElementById("ticket-Area-Container");
    const p = document.createElement("p");
    const amountString = document.getElementById("amount").innerText;
    const cost = parseInt(amountString);
    p.innerText = button + "---------------economy----------------" + cost;
    ticketAreaContainer.appendChild(p);

    // total amount calculation
    totalAmount = totalAmount + cost;
    // console.log(totalAmount);
    const totalCost = document.getElementById("total-price");
    // const totalPrice = parseInt(totalCost);
    totalCost.innerText = totalAmount;

    // booking seat calculation
    const bookingSeat = document.getElementById("seat-booked");
    bookedSeat = bookedSeat + 1;
    bookingSeat.innerText = bookedSeat;
  })
  
}