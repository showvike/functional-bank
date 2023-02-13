// get the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
    // get the input deposit amount
    const depositField = document.getElementById("deposit-field");
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);

    // clear the input deposit field
    depositField.value = "";

    // get the previous deposit amount
    const depositAmount = document.getElementById("deposit-amount");
    const previousDepositString = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);

    // add both
    const depositTotal = previousDepositAmount + depositValue;

    // update the deposit amount
    depositAmount.innerText = depositTotal;
});
