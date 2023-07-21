const fruitJson = "https:brotherblazzard.github.io/canvas-content/fruit.json";

const drinkSub = document.getElementById("drinksSubmitted");

 var fruitData = null;

// async function getData () {
//     const response = await fetch(fruitJson);
//     const data = await response.json();
//     console.log(data);
//     fruitData = data;
    
// }


function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const fruitFormData = Object.fromEntries(data.entries());
    const choices = [fruitFormData.fruits1, fruitFormData.fruits2, fruitFormData.fruits3];
    console.log({choices});
    // fruitData = getData();
    console.log({fruitFormData});

    buildSummery(fruitFormData);
    getNutritionData(fruitData, choices)
    let userSub = Number(window.localStorage.getItem("DrinkSub"));

    drinkSub.textContent = `Drinks Submitted by User: ${userSub}`;
    userSub ++;
    localStorage.setItem("DrinkSub", userSub);
    
  };
  
  
  
  const buildSummery = (formStuff, json) => {
      const pageSect = document.getElementById("userInfo");
      
      let ul = document.createElement("ul");
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let li3 = document.createElement("li");
      let li4 = document.createElement("li");
      let li5 = document.createElement("li");
      let li6 = document.createElement("li");
      let li7 = document.createElement("li");
      let div = document.createElement("div");
      
      let firstName = document.createElement("h2")
      let phone = document.createElement("h3");
      let email = document.createElement("h3");
      let fruit1 = document.createElement("h3");
      let fruit2 = document.createElement("h3");
      let fruit3 = document.createElement("h3");
      let comment = document.createElement("h3");
      
      firstName.innerHTML = `<strong>${formStuff.fname}</strong>`;
      
      comment.innerText = `Instructions ${formStuff.fruitComment}`;
      email.innerText = `Email: ${formStuff.email}`;
      phone.innerText = `Phone ${formStuff.phone}`;
      fruit1.innerText = `Fruit Choices: ${formStuff.fruits1}, ${formStuff.fruits2}, ${formStuff.fruits3}`;
    //   fruit2.innerText = `- ${formStuff.fruits2}`;
    //   fruit3.innerText = `- ${formStuff.fruits3}`;
      
      li2.appendChild(phone);
      li3.appendChild(email)
      li4.appendChild(fruit1);
    //   li5.appendChild(fruit2);
    //   li6.appendChild(fruit3);
      li7.appendChild(comment);
      ul.append(li2);
      ul.append(li3);
      ul.append(li3);
      ul.append(li4);
    //   ul.append(li5);
    //   ul.append(li6);
      ul.append(li7);
      
      pageSect.append(firstName);
      pageSect.append(ul);
    };
    
const form = document.getElementById("freshForm");
form.addEventListener('submit', handleSubmit);


const fruitElement = document.getElementById("nutritionInfo");


const getNutritionData = (json, choices) => {
    let carbs = document.createElement("h3");
    let protein = document.createElement("h3");
    let sugar = document.createElement("h3");
    let calories = document.createElement("h3");

    let carbData = null;
    let proData = null;
    let sugarData = null;
    let calData = null;


    choices.forEach(choice => {
        json.forEach(item => {

            if (item.name == choice){
                carbData += item.nutritions.carbohydrates;
                // console.log(carbData);
                proData += item.nutritions.protein;
                // console.log(proData);
                sugarData += item.nutritions.sugar;
                // console.log(sugarData);
                calData += item.nutritions.calories;
                // console.log(calData);
            }    
        });
    });

    carbs.innerHTML = `Carbohydrates: ${carbData.toFixed(1)}`;
    protein.innerHTML = `Proteins: ${proData.toFixed(1)}`;
    sugar.innerHTML = `Sugars: ${sugarData.toFixed(1)}`;
    calories.innerHTML = `Calories: ${calData.toFixed(1)}`;


    fruitElement.append(carbs);
    fruitElement.append(protein);
    fruitElement.append(sugar);
    fruitElement.append(calories);

};   

// const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getData () {
    const response = await fetch(fruitJson);
    const data = await response.json();
    console.log(data);

    displayFruitSelection(data);
    fruitData = data;
}

// const displayFruitSelection = (fruits) => {
//     const idList = ["fruitSelect1", "fruitSelect2", "fruitSelect3"]

//     idList.forEach((element) => {
//         const fruitList = document.getElementById(element);
        
//         fruits.forEach((fruit) => {
//             let item = document.createElement("option");

//             item.setAttribute("value", fruit.name);
//             item.innerText = `${fruit.name}`;

//             fruitList.append(item);
//         });

//     });
// }

const btn = document.getElementById("fruitdata");




getData();