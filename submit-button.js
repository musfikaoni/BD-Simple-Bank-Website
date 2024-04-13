document.getElementById('btn-submit').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const email = inputField.value;

    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    if(email === 'musfika@gmail.com' && pass === 'musu'){
        window.location.href = 'dashboard.html';
    }
    else {
        alert('tui bank dakat');
    }
})
