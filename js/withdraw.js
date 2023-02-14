// withdraw button's event listener
document.getElementById("btn-withdraw").addEventListener("click", function () {
    // get new withdraw amount
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    // get previous withdraw amount
    const previousWithdrawAmount = getElementValueById("withdraw-total");
    // add them
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    // set the total withdraw amount
    setElementValueById("withdraw-total", totalWithdrawAmount);

    // get previous balance
    const previousBalanceAmount = getElementValueById("balance-total");
    // add previous balance and new withdraw amount
    const totalBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    // add them
    setElementValueById("balance-total", totalBalanceAmount);
});
