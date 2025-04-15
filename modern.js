const logotips = document.getElementsByClassName('logo-photo');
for (let i = 0; i < logotips.length; i++) {
    logotips[i].onclick = function() {
        window.location.href = 'https://pro.firpo.ru/';
    }
}


// create speciality buttons:
const winners_years = document.getElementById('winners-special__block');
const plus_teacher = document.createElement('button');

// create button with real name: 'Педагогика дополнительного образования';
const plus_teacher_p = document.createElement('p');
plus_teacher_p.textContent = '44.02.03';
plus_teacher.className = 'special__block';
plus_teacher.id = 'plus_teacher_button';
plus_teacher_p.className = 'p-special';
plus_teacher.appendChild(plus_teacher_p);

// add child for winners of year block
winners_years.appendChild(plus_teacher);

//!!!!!important about button = plus_teacher_button
document.getElementById('plus_teacher_button').disabled = "false";