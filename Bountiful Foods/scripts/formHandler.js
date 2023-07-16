const fruitJson = "https:brotherblazzard.github.io/canvas-content/fruit.json";

async function getData () {
    const response = await fetch(fruitJson);
    const data = await response.json();
    console.log(data);
    
    
}



function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const fruitFormData = Object.fromEntries(data.entries());

    console.log({fruitFormData});
    
    buildSummery(fruitFormData);

  }
  
  const form = document.getElementById("freshForm");
  form.addEventListener('submit', handleSubmit);


const buildSummery = (formStuff, json) => {
    const pageSect = document.getElementById("submitInfo");

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let div = document.createElement("div");
    
    let firstName = document.createElement("h2")
    let phone = document.createElement("h3");
    let email = document.createElement("h3");
    let fruit1 = document.createElement("h3");
    let fruit2 = document.createElement("h3");
    let fruit3 = document.createElement("h3");
    let comment = document.createElement("h3");
    
    firstName.innerText = `-${formStuff.fname}`;
    
    comment.innerText = `- ${formStuff.fruitComment}`;
    email.innerText = `- ${formStuff.email}`;
    phone.innerText = `- ${formStuff.phone}`;
    fruit1.innerText = `- ${formStuff.fruits1}`;
    fruit2.innerText = `- ${formStuff.fruits2}`;
    fruit3.innerText = `- ${formStuff.fruits3}`;
    
    li.appendChild(firstName);
    li.appendChild(phone);
    li.appendChild(email)
    li.appendChild(fruit1);
    li.appendChild(fruit2);
    li.appendChild(fruit3);
    li.appendChild(comment);
    ul.append(li);

    pageSect.append(ul);
};
