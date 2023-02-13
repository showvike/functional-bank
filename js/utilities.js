function getInputFieldValueById(inputId) {
    /*
        get the input field value with the id
    */
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getElementValueById(elementId) {
    /*
        get the element value with the id
    */
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, value) {
    /*
        set the element value with the id and value
    */
    const element = document.getElementById(elementId);
    element.innerText = value;
}
