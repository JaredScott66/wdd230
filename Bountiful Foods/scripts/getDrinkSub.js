const drinkSub = document.getElementById("drinksSubmitted");

let userSub = Number(window.localStorage.getItem("DrinkSub"));

drinkSub.textContent = `Drinks Submitted by User: ${userSub}`;

localStorage.setItem("DrinkSub", userSub);
