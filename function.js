function deeposits(id){
    const inputFeild = document.getElementById('deposit-ammount');
    const inputAmmount = inputFeild.value;
  
    console.log(inputAmmount);
  
    const currentinputFeild = document.getElementById('total-deposits');
    const currentinputAmmount = currentinputFeild.innerText;
    console.log(currentinputAmmount);
  
    const total = parseFloat(currentinputAmmount) + parseFloat(inputAmmount);
  
    currentinputFeild.innerText = total;
  
  
    const balanceField = document.getElementById('Total-balance');
    const balanceAmmount = balanceField.innerText;
    console.log(balanceAmmount);
    const totalAmmount = parseFloat(balanceAmmount) + parseFloat(inputAmmount);
    balanceField.innerText = totalAmmount;
  
    inputFeild.value = "";
    return totalAmmount;
  
}
function withdraw(id,Id){
    const inputAmountField = document.getElementById('total-withdraw');
    const currentAmount = inputAmountField.innerText;
  
    const inputFeild = document.getElementById('withdraw-ammount');
    const inputAmmount = inputFeild.value;
  
    console.log(inputAmmount);
    const totalWithdraw = parseFloat(inputAmmount) + parseFloat(currentAmount);
  
    inputAmountField.innerText = totalWithdraw;
  
  
    const balanceField = document.getElementById('Total-balance');
    const balanceAmmount = balanceField.innerText;
    const newTotalBalance = parseFloat(balanceAmmount) - parseFloat(inputAmmount);
  
    balanceField.innerText = newTotalBalance;
    inputFeild.value="";
  
}

document.getElementById('diposit-btn').addEventListener('click',function(){
    deeposits('deposit-ammount')
});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    withdraw('total-withdraw', 'Total-balance');
})