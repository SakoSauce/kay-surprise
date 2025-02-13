let yesBtn = document.querySelector(".yesBtn");
let noBtn = document.querySelector(".noBtn");
let count = 0;
let phrases = [
    "are u sure?",
    "i know u wanna",
    "cmon u know u do",
    "pls",
    "press here",
    "PLEASE",
    "REEEEEEEEEEEE",
    "ok u might be colorblind",
    "ILL PLAY MARVEL RIVALS WITH U",
    "ILL BUY U STUFFIES",
    "ILL BUY U FOOD",
    "You're mine.",
];
let computedStyle = window.getComputedStyle(yesBtn);

function increaseSize() {
    let currFontSize = parseInt(computedStyle.getPropertyValue("font-size"));
    let newFontSize = currFontSize + 2;
    yesBtn.style["font-size"] = newFontSize + "px";
    yesBtn.innerText = phrases[count];
    count++;
    //works 12 times before no button disappears
    console.log("increasing size");
    let currHeight = yesBtn.offsetHeight;
    let currWidth = yesBtn.offsetWidth;
    let newHeight = currHeight * 1.15;
    let newWidth = currWidth * 1.3;
    yesBtn.style.height = newHeight + "px";
    yesBtn.style.width = newWidth + "px";
}
noBtn.addEventListener("click", increaseSize);
