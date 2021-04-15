var getin = document.querySelector("#getin");
var btn = document.querySelector("#btncheck");
var out = document.querySelector("#output");



clickHandler = () => {
    var useryear = getin.value;
    var getout = " ";



    if (useryear % 400 == 0) {
        getout = (useryear + " Yess, it is a leap year!! ");
    } else if (useryear % 100 == 0) {
        getout = " noo, it is not a leap year!! ";
    } else if (useryear % 4 == 0) {
        getout = (useryear + " Yess, it is a leap year!! ");
    } else {
        getout = " noo, it is not a leap year!! ";
    }
    out.innerText = getout;
}

btn.addEventListener("click", clickHandler);