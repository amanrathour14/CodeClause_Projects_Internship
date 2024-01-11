document.getElementById('addExpenseButton').addEventListener('click', () => {
    const expenseTitle = document.getElementById('expenseTitle').value;
    const expenseAmount = parseInt(document.getElementById('expenseAmount').value);
    const totalExpenditure = document.getElementById('totalExpenditure');
    const expensesList = document.getElementById('expensesList');

    if (expenseTitle.trim() === '' || expenseAmount === 0) {
        alert('Please enter a valid title and amount.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `₹${expenseAmount} - ${expenseTitle}`;
    expensesList.appendChild(listItem);

    const currentTotal = parseInt(totalExpenditure.textContent);
    totalExpenditure.textContent = currentTotal + expenseAmount;

    document.getElementById('expenseTitle').value = '';
    document.getElementById('expenseAmount').value = '';
});