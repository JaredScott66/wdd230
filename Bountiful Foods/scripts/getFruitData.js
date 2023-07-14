const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getData () {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayFruitSelection(data);
}

const displayFruitSelection = (fruits) => {
    const idList = ["fruitSelect1", "fruitSelect2", "fruitSelect3"]

    idList.forEach((element) => {
        const fruitList = document.getElementById(element);
        
        fruits.forEach((fruit) => {
            let item = document.createElement("option");

            item.setAttribute("value", fruit.name);
            item.innerText = `${fruit.name}`;

            fruitList.append(item);
        });

    });
}

const getNutrition = (fruits) => {
    const btn = document.getElementsByName(fruitSubmit);
    const fruit1 = document.getElementById("fruitSelect1");
    const fruit2 = document.getElementById("fruitSelect2");
    const fruit3 = document.getElementById("fruitSelect3");

    let div = document.createElement("div");
    let 

}

getData();

