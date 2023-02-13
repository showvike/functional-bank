// get the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
    // get the input deposit amount
    const depositField = document.getElementById("deposit-field");
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);

    // clear the input deposit field
    depositField.value = "";

    // get the total deposit amount
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // update the deposit amount
    const newDepositTotal = previousDepositTotal + depositValue;
    depositTotalElement.innerText = newDepositTotal;

    // get the total balance amount
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // update the balance amount
    const newBalanceTotal = previousBalanceTotal + depositValue;
    balanceTotalElement.innerText = newBalanceTotal;
});
