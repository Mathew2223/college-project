// main
const members_circle = document.getElementById('members-circle');
members_circle.addEventListener('click', function(){
    const members = document.getElementById('members');
    const results = document.getElementById('results');

    if (circleLeft.style.display === 'none') {
        members.style.display = 'none';
        results.style.display = 'flex';
        results.style.flexDirection = 'column';
        results.style.gap = '20px';
    }
    else {
        members.style.display = 'flex';
        results.style.display = 'none';
    }
});


const eighteen_art = document.getElementById('eighteen_art');
const nineteen_art = document.getElementById('nineteen-art');
const twenty_art = document.getElementById('twenty-art');
const first_art = document.getElementById('first-art');
const second_art = document.getElementById('second-art');
const third_art = document.getElementById('third-art');
const fourth_art = document.getElementById('fourth-art');


// 2018 year
document.getElementById('eighteen-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (nineteen_art.style.display === 'flex') {
        nineteen_art.style.display = 'flex';
    }
    else {
        eighteen_art.style.display = 'flex';
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('eighteen_art').style.cursor = 'default';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
})
// 2019 year
document.getElementById('nineteen-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (nineteen_art.style.display === 'flex') {
        nineteen_art.style.display = 'flex';
    }
    else {
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'flex';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('nineteen-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
});
// 2020 year
document.getElementById('twenty-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (twenty_art.style.display === 'flex') {
        twenty_art.style.display = 'flex';
    }
    else {
        twenty_art.style.display = 'flex';
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('twenty-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
});
// 2021 year
document.getElementById('first-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (first_art.style.display === 'flex') {
        first_art.style.display = 'flex';
    }
    else {
        first_art.style.display = 'flex';
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('first-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
});
// 2022 year
document.getElementById('second-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (second_art.style.display === 'flex') {
        second_art.style.display = 'flex';
    }
    else {
        second_art.style.display = 'flex';
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        third_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('second-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
});
// 2023 year
document.getElementById('third-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (third_art.style.display === 'flex') {
        third_art.style.display = 'flex';
    }
    else {
        third_art.style.display = 'flex';
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        fourth_art.style.display = 'none';
    }
    document.getElementById('third-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('fourth-year').style.cursor = 'pointer';
});
//2024 year
document.getElementById('fourth-year').addEventListener('click', function() {
    // document.getElementById('eighteen_art').classList.remove('active');
    document.getElementById('nineteen-year').classList.remove('active');
    document.getElementById('twenty-year').classList.remove('active');
    document.getElementById('first-year').classList.remove('active');
    document.getElementById('second-year').classList.remove('active');
    document.getElementById('third-year').classList.remove('active');
    document.getElementById('fourth-year').classList.remove('active');

    this.classList.add('active');

    if (fourth_art.style.display === 'flex') {
        fourth_art.style.display = 'flex';
    }
    else {
        fourth_art.style.display = 'flex';
        eighteen_art.style.display = 'none';
        nineteen_art.style.display = 'none';
        twenty_art.style.display = 'none';
        first_art.style.display = 'none';
        second_art.style.display = 'none';
        third_art.style.display = 'none';
    }
    document.getElementById('fourth-year').style.cursor = 'default';
    document.getElementById('eighteen_art').style.cursor = 'pointer';
    document.getElementById('nineteen-year').style.cursor = 'pointer';
    document.getElementById('twenty-year').style.cursor = 'pointer';
    document.getElementById('first-year').style.cursor = 'pointer';
    document.getElementById('second-year').style.cursor = 'pointer';
    document.getElementById('third-year').style.cursor = 'pointer';
});


// constants for dynamic blocks
// plus_teacher_button
// create child for for parent plus teacher block
const nav_winner_plus_teacher_years = document.createElement('nav');
nav_winner_plus_teacher_years.id = 'nav-winner-plus-teacher-years';
nav_winner_plus_teacher_years.className = 'winners-years';

const plus_teacher_2019 = document.createElement('button');
const plus_teacher_p_2019 = document.createElement('p');
plus_teacher_2019.className = 'years-twentys';
plus_teacher_2019.id = 'nineteen-year_plus_teacher_2019';
plus_teacher_p_2019.textContent = '2019';
plus_teacher_p_2019.className = 'p-years';
plus_teacher_2019.appendChild(plus_teacher_p_2019);

const plus_teacher_2020 = document.createElement('button');
const plus_teacher_p_2020 = document.createElement('p');
plus_teacher_p_2020.textContent = '2020';
plus_teacher_p_2020.className = 'p-years';
plus_teacher_2020.className = 'years-twentys';
plus_teacher_2020.id = 'nineteen-year_plus_teacher_2020';
plus_teacher_2020.appendChild(plus_teacher_p_2020);

let years_plus_teacher = [plus_teacher_2019, plus_teacher_2020];
nav_winner_plus_teacher_years.append(...years_plus_teacher);

const plus_teacher_button = document.getElementById('plus_teacher_button');



// it system nav
const it_system_button = document.getElementById('it-system_button');
it_system_button.addEventListener('click', function(){
    const nav_winners_years = document.querySelector('.winners-years');
    if (nav_winners_years.style.display === 'none') {
        nav_winners_years.style.display = 'flex';
    }
    plus_teacher_button.classList.remove('active');
    plus_teacher_button.style.cursor = 'pointer';
    this.classList.add('active');
    this.style.cursor = 'default';

    document.getElementById('nineteen-year_plus_teacher_2019').style.display = 'none';
    document.getElementById('nineteen-year_plus_teacher_2020').style.display = 'none';

    this.style.display = 'flex';
    this.style.justifyContent = 'center';
    this.style.alignItems = 'center';
});

// it plus teacher nav
plus_teacher_button.addEventListener('click', function() {
    const nav_winners_years = document.querySelector('.winners-years');
    if (nav_winners_years.style.display === 'none') {
        nav_winners_years.style.display = 'flex';
    }
    it_system_button.classList.remove('active');
    it_system_button.style.cursor = 'pointer';

    this.classList.add('active');
    this.classList.contains('active') ? this.style.cursor = 'default' : this.style.cursor = 'pointer';

    document.getElementById('winners-years2').style.display = 'none';
    document.getElementById('results').appendChild(nav_winner_plus_teacher_years);

    eighteen_art.style.display = 'none';
    nineteen_art.style.display = 'none';
    twenty_art.style.display = 'none';
    first_art.style.display = 'none';
    second_art.style.display = 'none';
    third_art.style.display = 'none';
    fourth_art.style.display = 'none';

    document.getElementById('nineteen-year_plus_teacher_2019').style.display = 'flex';
    document.getElementById('nineteen-year_plus_teacher_2019').style.justifyContent = 'center';
    document.getElementById('nineteen-year_plus_teacher_2020').style.display = 'flex';
    document.getElementById('nineteen-year_plus_teacher_2020').style.justifyContent = 'center';

    nav_winner_plus_teacher_years.style.display = 'flex';
});
plus_teacher_2019.addEventListener('click', function() {
    document.getElementById('nineteen-year_plus_teacher_2019').classList.remove('active');
    document.getElementById('nineteen-year_plus_teacher_2020').classList.remove('active');

    this.classList.add('active');
    this.style.cursor = 'default';
    plus_teacher_2020.style.cursor = 'pointer';
});
plus_teacher_2020.addEventListener('click', function() {
    document.getElementById('nineteen-year_plus_teacher_2019').classList.remove('active');
    document.getElementById('nineteen-year_plus_teacher_2020').classList.remove('active');

    this.classList.add('active');

    plus_teacher_2019.style.cursor = 'pointer';
    this.style.cursor = 'default';
});