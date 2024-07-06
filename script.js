
let totalBalance = 0;


function addTransaction() {
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    
    if (isNaN(amount)) {
        alert('Please enter a valid number.');
        return;
    }
    
    totalBalance += amount;
    
    
    updateBalanceDisplay();
    

    document.getElementById('transactionAmount').value = '';
}


function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById('totalBalance');
    balanceDisplay.textContent = `$${totalBalance.toFixed(2)}`;
}
