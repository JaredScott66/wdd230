

function getTime() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    var x = `${day} - ${month} - ${year}`
    document.getElementById("date").innerHTML = x;
}

getTime()