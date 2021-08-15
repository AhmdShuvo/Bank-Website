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

})