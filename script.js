var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);


// player 1 dicee
if (randomNum1 === 1) {
    document.querySelector(".p1img1").classList.remove("hide");
} else {
    document.querySelector(".p1img1").classList.add("hide");
}

if (randomNum1 === 2) {
    document.querySelector(".p1img2").classList.remove("hide");
} else {
    document.querySelector(".p1img2").classList.add("hide");
}

if (randomNum1 === 3) {
    document.querySelector(".p1img3").classList.remove("hide");
} else {
    document.querySelector(".p1img3").classList.add("hide");
}

if (randomNum1 === 4) {
    document.querySelector(".p1img4").classList.remove("hide");
} else {
    document.querySelector(".p1img4").classList.add("hide");
}

if (randomNum1 === 5) {
    document.querySelector(".p1img5").classList.remove("hide");
} else {
    document.querySelector(".p1img5").classList.add("hide");
}

if (randomNum1 === 6) {
    document.querySelector(".p1img6").classList.remove("hide");
} else {
    document.querySelector(".p1img6").classList.add("hide");
}



// player 2 dicee
if (randomNum2 === 1) {
    document.querySelector(".p2img1").classList.remove("hide");
} else {
    document.querySelector(".p2img1").classList.add("hide");
}

if (randomNum2 === 2) {
    document.querySelector(".p2img2").classList.remove("hide");
} else {
    document.querySelector(".p2img2").classList.add("hide");
}

if (randomNum2 === 3) {
    document.querySelector(".p2img3").classList.remove("hide");
} else {
    document.querySelector(".p2img3").classList.add("hide");
}

if (randomNum2 === 4) {
    document.querySelector(".p2img4").classList.remove("hide");
} else {
    document.querySelector(".p2img4").classList.add("hide");
}

if (randomNum2 === 5) {
    document.querySelector(".p2img5").classList.remove("hide");
} else {
    document.querySelector(".p2img5").classList.add("hide");
}

if (randomNum2 === 6) {
    document.querySelector(".p2img6").classList.remove("hide");
} else {
    document.querySelector(".p2img6").classList.add("hide");
}


// rules
if (randomNum1 > randomNum2) {
    document.querySelector(".heading3").classList.remove("hide");
}

if (randomNum1 < randomNum2) {
    document.querySelector(".heading4").classList.remove("hide");
}

if (randomNum1 === randomNum2) {
    document.querySelector(".heading2").classList.remove("hide");
}