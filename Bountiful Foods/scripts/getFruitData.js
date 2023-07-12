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
            item.innerText = `Select`;

            fruitList.append(item);
        });

    });
}

getData();

