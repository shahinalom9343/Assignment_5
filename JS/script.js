const buttonString = document.getElementsByClassName('seat');
let totalAmount = 0;
let bookedSeat =0;
let seatRemaining = 12;
// console.log(buttonString)
for(let i=0;i<buttonString.length;i++){
  const buttonSingle = buttonString[i];
  const button = buttonSingle.innerText;
  // console.log(buttonSingle);
 
  buttonSingle.addEventListener("click", function(){
    // console.log(button);
    // button background design
    buttonSingle.classList.add("bg-green-500");

    // ticket section calculation
    const ticketAreaContainer = document.getElementById("ticket-Area-Container");
    const p = document.createElement("p");
    const amountString = document.getElementById("amount").innerText;
    const cost = parseInt(amountString);
    p.innerText = button + "-------------economy---------------" + cost;
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
    if(bookedSeat > 4){
      alert("Ticket limit have been exceeded !!!");
      buttonSingle.classList.remove("bg-green-500");
      // buttonSingle.classList.add("disabled");
    }

    // cuurent available seat calculation
    const availableSeat = document.getElementById("available-seat");
    seatRemaining = seatRemaining - 1;
    availableSeat.innerText =seatRemaining;




    // grand total calculation
    const btn = document.getElementById("apply-btn");
    btn.addEventListener('click', function(){
    // coupon section
    const couponElement = document.getElementById("coupon-field");
    const coupon = couponElement.value;
    const couponCode = coupon.split(" ").join("").toUpperCase();
    
    if(couponCode === "NEWS15"){
      // discount
      const grandTotalAmount = document.getElementById("grand-total");
       const discount = totalAmount * 0.15;
       const remainingAmount = totalAmount - discount;
       grandTotalAmount.innerText = remainingAmount;
       const couponDiv = document.getElementById("coupon-div");
       couponDiv.classList.add("hidden");
      //  document.getElementById('coupon-field').value = "";

    }
    else if(couponCode === "COUPLE20"){
      // discount
      const grandTotalAmount = document.getElementById("grand-total");
       const discount = totalAmount * 0.2;
       const remainingAmount = totalAmount - discount;
       grandTotalAmount.innerText = remainingAmount;
      const couponDiv = document.getElementById("coupon-div");
      couponDiv.classList.add("hidden");
            //  document.getElementById('coupon-field').value = "";
    }
    else{
      const grandTotalAmount = document.getElementById("grand-total");
      grandTotalAmount.innerText = totalAmount;
      document.getElementById('coupon-field').value = "";
    }
    
    })
    
  })
  
}
