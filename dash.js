document.getElementById('btn-dps').addEventListener('click', function(){
    const depositField = document.getElementById('dps-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const depositTotalElement = document.getElementById('dps-total');
    const prevDepositString = depositTotalElement.innerText;
    const prevDeposit = parseFloat(prevDepositString);

    const currentDepositTotal = prevDeposit + newDeposit;
    depositTotalElement.innerText = currentDepositTotal;

    depositField.value = '';
})