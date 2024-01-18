// Function to show the input box to enter values
function showInputFields() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFieldsDiv = document.getElementById('inputFields');
    inputFieldsDiv.style.display = 'block'; // This show the input field

    const label1 = document.querySelector('#inputFields label[for="input1"]');
    const label2 = document.querySelector('#inputFields label[for="input2"]');
    const ask = document.querySelector('#inputFields label[for="input2"]');

    switch (calculationType) {
        case 'current':
            label1.innerText = 'Voltage (V):';
            label2.innerText = 'Resistance (R):';
            break;
        case 'voltage':
            label1.innerText = 'Current (I):';
            label2.innerText = 'Resistance (R):';
            break;
        case 'resistance':
            label1.innerText = 'Voltage (V):';
            label2.innerText = 'Current (I):';
            break;
        case 'resistor in series':
            ask.innerText = 'How many resistors to calculate for'
        default:
            inputFieldsDiv.style.display = 'none';
            break;
    }
}

// This function calculate the values that are entered in the input box
function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    // Calculate user input is all input are fill
    if (!isNaN(input1) && !isNaN(input2)) {
        let formula;
        let findFor;
        let result;

        switch (calculationType) {
            case 'current':
                findFor = `Find I`;
                formula = `Formula: I = V / R`;
                result = `V = ${input1} volts R = ${input2} ohms I = ?`;
                break;
            case 'voltage':
                findFor = `Find V`;
                result = `Voltage (V): ${input1 * input2} volts`;
                formula = `Formula: V = I * R`;
                break;
            case 'resistance':
                findFor = `Find R`;
                result = `Resistance (R): ${input1 / input2} ohms`;
                formula = `Formula: R = V / I`;
                break;
            default:
                result = 'Invalid calculation type.';
                formula = '';
                break;
        }

        document.getElementById('findFor').innerText = findFor;
        document.getElementById('result').innerText = result;
        document.getElementById('formula').innerText = formula;
        document.getElementById('ask').innerText = ask;
    } else {
        // error message to display
        document.getElementById('result').innerText = 'Invalid input. Please enter numeric values.';
        document.getElementById('formula').innerText = '';
    }
}
