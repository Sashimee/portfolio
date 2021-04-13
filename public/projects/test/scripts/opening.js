const now = new Date();
let currentHour = +now.getHours();
let currentMinute = +now.getMinutes();

function soonOpen(actualHour) {
    if (actualHour == 10 || actualHour == 19) {
        return true
    } else {
        return false
    }
};

function soonClose(actualHour) {
    if (actualHour == 13 || actualHour == 22) {
        return true
    } else {
        return false
    }
};

function hideOpeningAlert() {
    // e.target.style.display = "none" would also use e as parameter
    for (const activeOpeningAlert of openingAlert) {
        activeOpeningAlert.style.display = "none"
    }
}

const middayHours = currentHour >= 11 && currentHour < 14
const eveningHours = currentHour >= 19 && currentHour < 23

//currentHour = 24

if (middayHours || eveningHours) {
    document.body.innerHTML += "<img class=\"opening\" style=\"position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);\" src=\"images/open.jpg\">";

    if (soonClose(currentHour) == true && currentMinute >= 30) {
        document.body.innerHTML += "<h1 class=\"opening\" style=\"position:fixed;top:50%;left:50%;transform:translate(-50%,20rem);\">It will close in " + (60 - currentMinute) + " minutes</h1>";
    }
} else {
    document.body.innerHTML += "<img class=\"opening\" style=\"position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);\" src=\"images/closed.jpg\">";
    if (soonOpen(currentHour) == true && currentMinute >= 30) {
        document.body.innerHTML += "<h1 class=\"opening\" style=\"position:fixed;top:50%;left:50%;transform:translate(-50%,10rem);\">It will open in " + (60 - currentMinute) + " minutes</h1>";
    }
};
// * Close the opening display on click
const openingAlert = document.querySelectorAll(".opening");

console.log(openingAlert)

for (const activeOpeningAlert of openingAlert) {
    activeOpeningAlert.addEventListener("click", hideOpeningAlert)
}

// ! I PROBABLY SHOULD PUT THE HTML IN THE HTML AND JUST DECIDE TO SHOW IT IF NEEDED

//* Form check on the fly
debugger;
const daField = document.querySelector("#email");
daField.addEventListener("keyup", inputCheck(daField.value));

function inputCheck(olol) {
    console.log(olol)
}