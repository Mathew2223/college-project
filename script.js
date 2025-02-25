// nav
const membersSwitch = document.getElementById('members-circle');
const circleLeft = document.getElementById('circle-left');
const circleRight = document.getElementById('circle-right');

membersSwitch.addEventListener('click', () => {
    if (circleLeft.style.display === 'none') {
        circleLeft.style.display = 'block';
        circleRight.style.display = 'none';
    } else {
        circleLeft.style.display = 'none';
        circleRight.style.display = 'block';
    }
});


// main
document.getElementById('members-circle').addEventListener('click',
function(){
    const members = document.getElementById('members');
    const results = document.getElementById('results');

    if (circleLeft.style.display === 'none') {
        members.style.display = 'none';
        results.style.display = 'flex';
    }
    else {
        members.style.display = 'flex';
        results.style.display = 'none';

    }
});