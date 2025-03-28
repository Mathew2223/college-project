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
        document.getElementById('nav-winner-plus-teacher-years').removeAttribute('style');
        document.getElementById('it-system_button').removeAttribute('style');
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

    const special_window_size = document.querySelectorAll('.progr-speciality_p');
    special_window_size.forEach((item) => {
        if (window.innerWidth >= 2100) {
            item.textContent = 'Программирование в компьютерных системах';
        }
        else if (window.innerWidth < 2100 && window.innerWidth > 1150) {
            item.textContent = '09.02.03 Программирование в компьютерных системах';
        }
        else if (window.innerWidth <= 1150) {
            item.innerHTML = '<abbr style="text-decoration: underline;" title="Программирование в компьютерных системах">09.02.03</abbr>';
        }
        // Try:
        // item.addEventListener('mouseenter', () => {
        //     const tooltip = document.createElement('span');
        //     tooltip.className = 'tooltip';
        //     tooltip.textContent = 'Программирование в компьютерных системах';
        //     document.body.appendChild(tooltip);
     
        //     const rect = item.getBoundingClientRect();
        //     tooltip.style.position = 'absolute';
        //     tooltip.style.left = `${rect.left}px`;
        //     tooltip.style.top = `${rect.bottom}px`;
        // });
        // item.addEventListener('mouseleave', () => {
        //     const tooltip = document.querySelector('.tooltip');
        //     if (tooltip) {
        //         tooltip.remove();
        //     }
        // });
    });

    document.querySelectorAll('.members-switch-text').forEach((item) => {
        if (window.innerWidth < 500) {
            item.textContent = 'Результаты';
        }
    });
}
window.onload = changeTextBasedOnScreenWidth;
window.onresize = changeTextBasedOnScreenWidth;