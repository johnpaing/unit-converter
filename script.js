function convertLength(){
    let reset = document.getElementById("bt");
    let submit = document.getElementById("sub");
    let input = parseFloat(document.getElementById("inputValue").value);
    let fromunit = document.getElementById("fromLength").value;
    let tounit = document.getElementById("toLength").value;

    let meters;

    

    switch(fromunit){
        case "mm": meters = input / 1000; break;
        case "cm": meters = input / 100; break;
        case "m": meters = input; break;
        case "km": meters = input * 1000; break;
        case "inch": meters = input * 0.0254; break;
        case "foot": meters = input * 0.3048; break;
        case "yard": meters = input * 0.9144; break;
        case "mile": meters = input * 1609.34; break;
    }

    let result;

    switch(tounit){
        case "mm": result = meters * 1000; break;
        case "cm": result = meters * 100; break;
        case "m": result = meters; break;
        case "km": result = meters / 1000; break;
        case "inch": result = meters / 0.0254; break;
        case "foot": result = meters / 0.3048; break;
        case "yard": result = meters / 0.9144; break;
        case "mile": result = meters / 1609.34; break;
    }

    submit.style.display = "none";
    document.getElementById("Result").innerText = "Converted Value: " + result;
    reset.style.display = "inline";
    
    reset.addEventListener("click", function() {
        submit.style.display = "inline";
        reset.style.display = "none";
    });

}

function convertWeight(){

    let reset = document.getElementById("bt");
    let submit = document.getElementById("sub");
    let input = parseFloat(document.getElementById("input").value);
    let from = document.getElementById("fromweight").value;
    let to = document.getElementById("toweight").value;

    let grams;

    switch(from){
        case "mg": grams = input / 1000; break;
        case "g": grams = input; break;
        case "kg": grams = input * 1000; break;
        case "oz": grams = input * 28.3495; break;
        case "lb": grams = input * 453.592; break;
    }

    let result;

    switch(to){
        case "mg": result = grams * 1000; break;
        case "g": result = grams; break;
        case "kg": result = grams / 1000; break;
        case "oz": result = grams / 28.3495; break;
        case "lb": result = grams / 453.592; break;
    }

    submit.style.display = "none";
    document.getElementById("Result").innerText = "Converted Value: " + result;
    reset.style.display = "inline";
    
    reset.addEventListener("click", function() {
        submit.style.display = "inline";
        reset.style.display = "none";
    });
}

function convertTemperature(){
    let reset = document.getElementById("bt");
    let submit = document.getElementById("sub");
    let input = parseFloat(document.getElementById("input").value);
    let from = document.getElementById("fromtemp").value;
    let to = document.getElementById("totemp").value;

    switch(from){
        case "C": input = input; break;
        case "F" : input = (input - 32) * 5/9; break;
        case "K" : input = input - 273.15; break;
    }

    let result;

    switch(to){
        case "C": result = input; break;
        case "F" : result = (input * 9/5) + 32; break;
        case "K" : result = input + 273.15; break;
    }

    submit.style.display = "none";
    document.getElementById("Result").innerText = "Converted Value: " + result;
    reset.style.display = "inline";
    
    reset.addEventListener("click", function() {
        submit.style.display = "inline";
        reset.style.display = "none";
    });
   
}

function resetForm(){
    document.getElementById("form").reset();
    document.getElementById("Result").innerText = "";
    
    
}