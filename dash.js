document.getElementById('btn-deposit').addEventListener('click',function() {
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.ariaValueMax;
    const newDeposit = parseFloat(newDepositString);

    const depositTotalElement = document.getElementById('deposit-area');
    const prevDepositString = depositTotalElement.innerText;
    const prevDeposit = parseFloat(prevDepositString);

    const currentDepositTotal = prevDeposit + newDeposit;
    depositTotalElement.innerText = currentDepositTotal;

    depositField.value = '';

    const balanceTotalElement =document.getElementById('balance-field');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const pervBalanceTotal = parseFloat(prevBalanceTotalString);

    const currentBalanceTotal = pervBalanceTotal + newDeposit;
    balanceTotalElement.innerText = currentBalanceTotal;
})