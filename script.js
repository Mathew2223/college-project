// nav
const membersSwitch = document.getElementById('members-circle');
const circleLeft = document.getElementById('circle-left');
const circleRight = document.getElementById('circle-right');
const menu = document.querySelector('#menu');

membersSwitch.addEventListener('click', () => {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    document.getElementById('nineteen-art').style.display = 'none';
    document.getElementById('twenty-art').style.display = 'none';
    document.getElementById('first-art').style.display = 'none';
    document.getElementById('second-art').style.display = 'none';
    document.getElementById('third-art').style.display = 'none';
    document.getElementById('fourth-art').style.display = 'none';
    
    if (circleLeft.style.display === 'none') {
        circleLeft.style.display = 'block';
        circleRight.style.display = 'none';
    } else {
        circleLeft.style.display = 'none';
        circleRight.style.display = 'block';
    }
});

function changeTextBasedOnScreenWidth() {
    const name_of_place_competition = document.querySelectorAll('.name_of_place-competition');
    name_of_place_competition.forEach((element) => {
        if (window.innerWidth < 1768) {
            element.textContent = 'КОГПОБУ СКПиСО';
        }
    });
}
window.onload = changeTextBasedOnScreenWidth;
window.onresize = changeTextBasedOnScreenWidth;