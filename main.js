
//   LOGIN PAGE ///

document.getElementById('Submit-btn').addEventListener('click',function(){
//   GET EMIAL //
  const emailfield=  document.getElementById('email-field');

  const Email=emailfield.value;
// GET PASSWORD //
  const passwordField=document.getElementById('password-field');
  const Password=passwordField.value;




// CHECK IF MATCHED //
    if(Email== 'email' && Password== 'pass')
    {  
        // OPEN NEW DASHBOARD PAGE //
        window.location.href ='dashboard.html';
        console.log('valid user');
    }
   
  
    
});

// END OF LOGIN PAGE //

// DASH BORAD///

  
  


