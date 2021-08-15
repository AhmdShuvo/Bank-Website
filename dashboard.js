document.getElementById('diposit-btn').addEventListener('click',function(){
const depositFeild=document.getElementById('deposit-ammount');
const depositAmmount=depositFeild.value;
 
console.log(depositAmmount);
  
const currentdepositFeild=document.getElementById('total-deposits');
const  currentDepositAmmount=currentdepositFeild.innerText;
console.log(currentDepositAmmount);
 
const total= parseFloat(currentDepositAmmount)+parseFloat(depositAmmount);

 currentdepositFeild.innerText=total;
 

 const balanceField =document.getElementById('Total-balance');
 const balanceAmmount=balanceField.innerText;
 console.log(balanceAmmount);
 const totalAmmount=parseFloat(balanceAmmount)+ parseFloat(depositAmmount);
 balanceField.innerText=totalAmmount;

 depositFeild.value="";

});
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmountField =document.getElementById('total-withdraw');
    const currentwithdrawAmmount=withdrawAmountField.innerText;
   
    const withdrawFeild=document.getElementById('withdraw-ammount');
const withdrawAmmount=withdrawFeild.value;
 
console.log(withdrawAmmount);
 const totalWithdraw= parseFloat(withdrawAmmount)+parseFloat(currentwithdrawAmmount);
 
 withdrawAmountField.innerText=totalWithdraw;

 
 const balanceField =document.getElementById('Total-balance');
 const balanceAmmount=balanceField.innerText;
  const newTotalBalance=parseFloat(balanceAmmount)-parseFloat(withdrawAmmount);
   
  balanceField.innerText=newTotalBalance;

})