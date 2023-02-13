// deposit button's event listener
document.getElementById("btn-deposit").addEventListener("click", function () {
    // get new deposit amount
    const newDepositAmount = getInputFieldValueById("deposit-field");
    // get previous deposit amount
    const previousDepositAmount = getElementValueById("deposit-total");
    // add them
    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    // set the total deposit amount
    setElementValueById("deposit-total", totalDepositAmount);

    // get previous balance
    const previousBalanceAmount = getElementValueById("balance-total");
    // add previous balance and new deposit amount
    const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
    // add them
    setElementValueById("balance-total", totalBalanceAmount);
});
