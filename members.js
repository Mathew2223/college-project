const members_section = document.getElementById('members');

// members blocks
let members = [
    {
        element: document.createElement('div'),
        title: 'Седов Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Черных Александр',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Екимова Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Порошина Дарья',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Бобров Антон',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Бутин Артем',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Калинин Арсений',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Хамидуллин Айрат',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Коротких Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
    {
        element: document.createElement('div'),
        title: 'Шмыров Егор',
        speciality: '09.02.03 Программирование в компьютерных системах'
    },
];

document.addEventListener('DOMContentLoaded', function() {
    members.forEach(function(member) {
        member.element.className = 'member-info_block';
    
        // constants of details in member - block
        const biography_block = document.createElement('div');
        biography_block.className = 'member1_profile';

        const img = document.createElement('img');
        img.src = 'person.png';
        img.className = 'person_img';

        const seperator = document.createElement('section');
        seperator.className = 'seperator-wrapper';

        const seperatorGradient = document.createElement('div');
        seperatorGradient.className = 'seperator gradient';

        const title = document.createElement('p');
        title.className = 'first-place_paragraph';
        title.textContent = member.title;

        const membersInfo = document.createElement('ul');
        membersInfo.className = 'members-info_text';

        const speciality = document.createElement('li');
        speciality.className = 'special_student_1';
        const competition = document.createElement('li');
        competition.className = 'special_student_2';
        const diploms = document.createElement('li');
        diploms.className = 'special_student_3';

        const special_student_p1 = document.createElement('p');
        special_student_p1.className = 'special_student-p';
        special_student_p1.innerHTML = `<a class="text-members_purple__color">Специальность: </a><a class="progr-speciality_p">${member.speciality}</a>`;

        const special_student_p2 = document.createElement('p');
        special_student_p2.className = 'special_student-p';
        special_student_p2.innerHTML = `<a class="text-members_purple__color">Участие в конкурсах: </a>`;

        const special_student_p3 = document.createElement('p');
        special_student_p3.className = 'special_student-p';
        special_student_p3.innerHTML = `<a class="text-members_purple__color">Дипломы</a>`;
        

        // append children
        diploms.appendChild(special_student_p3);
        competition.appendChild(special_student_p2);
        speciality.appendChild(special_student_p1);
        membersInfo.append(speciality, competition);
        // ^ - diploms
        seperator.appendChild(seperatorGradient);
        biography_block.append(img, seperator, title);
        member.element.appendChild(biography_block);
        member.element.appendChild(membersInfo);
        members_section.append(member.element);
    });
});



// function on basedScreenWidth
function changeTextBasedOnScreenWidth() {
    const name_of_place_competition = document.querySelectorAll('.name_of_place-competition');
    name_of_place_competition.forEach((element) => {
        if (window.innerWidth < 1768) {
            element.textContent = 'КОГПОБУ СКПиСО';
        }
    });

    const special_window_size = document.querySelectorAll('.progr-speciality_p');
    special_window_size.forEach((item) => {
        if (window.innerWidth < 2100 && window.innerWidth > 1150) {
            item.textContent = Object.values(speciality);
        }
        else if (window.innerWidth <= 1150) {
            item.innerHTML = '<abbr style="text-decoration: underline;" title="Программирование в компьютерных системах">09.02.03</abbr>';
        }
    });

    document.querySelector('#result-members-compet_text') = () => {
        if (window.innerWidth < 500) {
            document.querySelector('#result-members-compet_text').textContent = 'Результаты';
        }
    }
}

window.onload = changeTextBasedOnScreenWidth;
window.onresize = changeTextBasedOnScreenWidth;