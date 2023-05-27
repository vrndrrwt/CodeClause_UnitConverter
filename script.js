function convert() {

    // Get input values

    var inputValue = parseFloat(document.getElementById("inputValue").value);

    var fromUnit = document.getElementById("fromUnit").value;

    var toUnit = document.getElementById("toUnit").value;

 

    // Perform conversion

    var result;

    if (fromUnit === "m" && toUnit === "cm") {

        result = inputValue * 100;

    } else if (fromUnit === "m" && toUnit === "km") {

        result = inputValue / 1000;

    } else if (fromUnit === "cm" && toUnit === "m") {

        result = inputValue / 100;

    } else if (fromUnit === "cm" && toUnit === "km") {

        result = inputValue / 100000;

    } else if (fromUnit === "km" && toUnit === "m") {

        result = inputValue * 1000;

    } else if (fromUnit === "km" && toUnit === "cm") {

        result = inputValue * 100000;

    } else {

        result = inputValue; // No conversion needed

    }

 

    // Display the result

    document.getElementById("result").innerText = result.toFixed(2);

}
