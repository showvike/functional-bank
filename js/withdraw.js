// get the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
    // get the input withdraw amount
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);

    // clear the input withdraw field
    withdrawField.value = "";

    // get the total withdraw amount
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // update the withdraw amount
    const newWithdrawTotal = previousWithdrawTotal + withdrawValue;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // get the total balance amount
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // update the balance amount
    const newBalanceTotal = previousBalanceTotal - withdrawValue;
    balanceTotalElement.innerText = newBalanceTotal;
});
