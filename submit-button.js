document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('input-field');
    const email = emailField.ariaValueMax;

    const  passField = document.getElementById('pass-field');
    const pass =passField.ariaValueMax;

    if(email === 'musfika@gmail.com' && pass === 'musu123') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('"wrong" emaill or password');
    }
})