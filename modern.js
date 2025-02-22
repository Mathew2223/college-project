const logotips = document.getElementsByClassName('logo-photo');
for (let i = 0; i < logotips.length; i++) {
    logotips[i].onclick = function() {
        window.location.href = 'https://pro.firpo.ru/';
    }
}