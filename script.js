// nav
const membersSwitch = document.getElementById('members-circle');
const circleLeft = document.getElementById('circle-left');
const circleRight = document.getElementById('circle-right');

membersSwitch.addEventListener('click', () => {
    document.getElementById('nineteen-art').style.display = 'none';
    document.getElementById('twenty-art').style.display = 'none';
    document.getElementById('first-art').style.display = 'none';
    document.getElementById('second-art').style.display = 'none';
    document.getElementById('third-art').style.display = 'none';

    if (circleLeft.style.display === 'none') {
        circleLeft.style.display = 'block';
        circleRight.style.display = 'none';
    } else {
        circleLeft.style.display = 'none';
        circleRight.style.display = 'block';
    }
});


// main
document.getElementById('members-circle').addEventListener('click', function(){
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

const nineteen_art = document.getElementById('nineteen-art');
const twenty_art = document.getElementById('twenty-art');
const first_art = document.getElementById('first-art');
const second_art = document.getElementById('second-art');
const third_art = document.getElementById('third-art');

// 2019 year
document.getElementById('nineteen-year').addEventListener('click', function() {
    if (nineteen_art.style.display === 'flex') {
        nineteen_art.style.display = 'flex';
    }
    else {
        nineteen_art.style.display = 'flex';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
    }
});
// 2020 year
document.getElementById('twenty-year').addEventListener('click', function() {
    if (twenty_art.style.display === 'flex') {
        twenty_art.style.display = 'flex';
    }
    else {
        twenty_art.style.display = 'flex';
        nineteen_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
    }
});
// 2021 year
document.getElementById('first-year').addEventListener('click', function() {
    if (first_art.style.display === 'flex') {
        first_art.style.display = 'flex';
    }
    else {
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'flex';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
    }
});
// 2022 year
document.getElementById('second-year').addEventListener('click', function() {
    if (second_art.style.display === 'flex') {
        second_art.style.display = 'flex';
    }
    else {
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'flex';
        third_art.style.display = 'none';
    }
});
// 2023 year
document.getElementById('third-year').addEventListener('click', function() {
    if (third_art.style.display === 'flex') {
        third_art.style.display = 'flex';
    }
    else {
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'flex';
    }
});