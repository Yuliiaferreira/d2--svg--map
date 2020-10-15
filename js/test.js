document.querySelectorAll('[id^="terminal_"]').forEach(function(terminalElem) {
    console.log(terminalElem.id, terminalElem);
    // get popup Id based on terminal Id
    //console.log("popup_" + terminalElem.id.split("_")[1]);
    const popupIt = "popup_" + terminalElem.id.split("_")[1];
    // select the popup from the page
    // console.log(document.getElementById(popupIt));
    const popupElem = document.getElementById(popupIt);
    // set up hovers element
    terminalElem.addEventListener("mouseover", function(event) {
        //console.log("hovered");
        popupElem.classList.add("popup-open");
    });
    terminalElem.addEventListener("mouseout", function(event) {
        //console.log("unhovered");
        popupElem.classList.remove("popup-open");
    });
    //terminalElem.addEventListener("click", function(event) {
        //popupElem.classList.toggle("popup-open"););
});
