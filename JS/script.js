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
    // buttonSingle.classList.add("disabled:")
    const amountString = document.getElementById("amount").innerText;
    const cost = parseInt(amountString);

    // ticket section calculation
    const seatName = document.getElementById("seat-name");
    const p1 = document.createElement("p");
    p1.innerText = button;
    seatName.appendChild(p1);

    const seatClass = document.getElementById("seat-class");
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    seatClass.appendChild(p2);
    
    const seatPrice = document.getElementById("seat-price");
    const p3 = document.createElement("p");
    p3.innerText = cost;
    seatPrice.appendChild(p3);

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
      buttonSingle.removeAttribute('disable',true);
    }

    // cuurent available seat calculation
    const availableSeat = document.getElementById("available-seat");
    seatRemaining = seatRemaining - 1;
    availableSeat.innerText =seatRemaining;

      // grand total calculation
    const grandTotalAmount = document.getElementById("grand-total");
    grandTotalAmount.innerText = totalAmount;

    const btn = document.getElementById("apply-btn");
    // btn.setAttribute('disable',true);
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
