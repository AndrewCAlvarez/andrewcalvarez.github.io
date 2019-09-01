//This code changes the text beside the slider, indicating it's value.
let slider = document.getElementById("myRange");
var sliderChange = () => {
    let sliderVal = document.getElementById("myRange").value;
    let sliderValContainer = document.getElementById("sliderVal--container");
    sliderValContainer.innerHTML = sliderVal.toString();
};
slider.addEventListener("input", sliderChange);

var generateArray = () => {
    var array = [];
    let arrSize = document.getElementById("myRange").value;
    for (i = 0; i < arrSize; i++) {
        array[i] = Math.floor(Math.random() * arrSize); //currently allows repeats. Perhaps make all members of array unique?
    }
    createBars(array); //displays the bars on screen
};

var createBars = a => {
    let barContainer = document.getElementById("bar--container");
    let currentBars = document.getElementsByClassName("arrayBar");
    while (currentBars[0]) {
        currentBars[0].parentNode.removeChild(currentBars[0]);
    }
    for (i = 0; i < a.length; i++) {
        let div = document.createElement("div");
        div.className = "arrayBar";
        div.id = a[i];
        div.style.height = a[i] + "0px";
        barContainer.appendChild(div);
    }
};
slider.addEventListener("input", generateArray);

let sortBtn = document.getElementById("sortBtn");
sortBtn.onclick = () => {
    var array = document.getElementsByClassName("arrayBar");
    bubbleSort(array);
};

var bubbleSort = array => {
    let sorted = false;
    let parent = document.getElementById("bar--container");
    while (!sorted) {
        let swapMade = false;

        setInterval(function() {
            for (i = 0; i < array.length - 1; i++) {
                if (i + 1 > array.length) {
                    break;
                } else {
                    let elem1 = parseInt(array[i].id, 10);
                    let elem2 = parseInt(array[i + 1].id, 10);
                    if (elem1 > elem2) {
                        parent.insertBefore(array[i + 1], array[i]);
                        swapMade = true;
                    }
                }
            }
        }, 50);

        if (!swapMade) {
            sorted = true;
        }
    }
};
