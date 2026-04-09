
function convertTemp() {
    
    let celsius = document.getElementById("c-input").value;
    

    let display = document.getElementById("output-area");
    
    
    if (celsius == "") {
        display.innerText = "Please enter a number.";
        display.className = "neutral-temp";
        return; // 
    }

    
    let fahrenheit = (celsius * 9/5) + 32;
    

    fahrenheit = fahrenheit.toFixed(2);

    
    display.innerText = celsius + "C is " + fahrenheit + "F";

    
    if (fahrenheit > 85) {
        display.className = "hot-temp";
    } else if (fahrenheit < 50) {
        display.className = "cold-temp";
    } else {
        display.className = "neutral-temp";
    }
}

let button = document.getElementById("trigger-calc");
button.onclick = convertTemp;
