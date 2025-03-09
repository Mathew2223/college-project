// nav
const membersSwitch = document.getElementById('members-circle');
const circleLeft = document.getElementById('circle-left');
const circleRight = document.getElementById('circle-right');

membersSwitch.addEventListener('click', () => {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

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
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

    this.classList.add('active');

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
    document.getElementById('nineteen-year').style.cursor = 'default';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
});
// 2020 year
document.getElementById('twenty-year').addEventListener('click', function() {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

    this.classList.add('active');

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
    document.getElementById('twenty-year').style.cursor = 'default';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
});
// 2021 year
document.getElementById('first-year').addEventListener('click', function() {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

    this.classList.add('active');

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
    document.getElementById('first-year').style.cursor = 'default';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
});
// 2022 year
document.getElementById('second-year').addEventListener('click', function() {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

    this.classList.add('active');

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
    document.getElementById('second-year').style.cursor = 'default';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
});
// 2023 year
document.getElementById('third-year').addEventListener('click', function() {
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');

    this.classList.add('active');

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
    document.getElementById('third-year').style.cursor = 'default';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
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



// Try:
    // function changeMarginOfBlockYear() {
    //     const thirdYearBlock = document.getElementById('#third-year');
    //     const otherYearsBlocks = document.querySelectorAll('.years-twentys');
    //     if (thirdYearBlock && otherYearsBlocks.elngth > 0) {
    //         const thirdYearRect = thirdYearBlock.getBoundingClientRect();
    //     }
    //     let isBelow = Array.from(otherYearsBlocks).every(block => {
    //         const blockRect = block.getBoundingClientRect();
    //         return blockRect.bottom < thirdYearBlock.top;
    //     });
    //     if (isBelow) {
    //         thirdYearBlock.style.marginTop = '-30px';
    //     } 
    //     thirdYearBlock.style.marginTop = '';
    // }
    // window.onload = changeMarginOfBlockYear;
    // window.onresize = changeMarginOfBlockYear;