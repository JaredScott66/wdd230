

function getTime() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    var x = `${day} - ${month} - ${year}`
    document.getElementById("date").innerHTML = x;
}

function setBanner() {
    var x = document.getElementById("datedBanner");
    var y = document.getElementById("timedBanner");
    const date = new Date();
    var day = date.getDay();
    if (day == 4) {
        x.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    } else {
        x.setAttribute("class", "dateNone");
        y.setAttribute("class", "dateNone")
    }
}

getTime()
setBanner()