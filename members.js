const members_section = document.getElementById('members');
// members blocks
let members = [
    {
        element: document.createElement('div'),
        title: 'Радыгин Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: 'А.А. Махнев',
        competition_results: ['3 место во Всероссийской олимпиаде профессионального мастерства 2019 год']
    },
    {
        element: document.createElement('div'),
        title: 'Седов Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: 'А.А. Махнев',
        competition_results: ['3 место по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2021 год']
    },
    {
        element: document.createElement('div'),
        title: 'Черных Александр',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['3 место по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2020 год']
    },
    {
        element: document.createElement('div'),
        title: 'Екимова Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['1 место Компетенция «ИТ-решения для бизнеса на платформе «1С:Предприятие 8»» – февраль 2020 год']
    },
    {
        element: document.createElement('div'),
        title: 'Порошина Дарья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['3 место по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2021 год']
    },
    {
        element: document.createElement('div'),
        title: 'Бобров Антон',
        speciality: '09.02.03 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['медальон «За профессионализм» по компетенции «ИТ - решения для бизнеса на платформе "1С: Предприятие 8"», г.Вятские Поляны – февраль 2019 год']
    },
    {
        element: document.createElement('div'),
        title: 'Бутин Артем',
        speciality: '09.02.07 Информационные системы и программирование',
        experting: '',
        competition_results: ['1 место, по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2022 год']
    },
    {
        element: document.createElement('div'),
        title: 'Калинин Арсений',
        speciality: '09.02.07 Информационные системы и программирование',
        experting: '',
        competition_results: ['3 место, по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2022 год']
        // competition_results2: '2 место, по компетенции «Разработка мобильных приложений», г.Киров –март 2023'
    },
    {
        element: document.createElement('div'),
        title: 'Хамидуллин Айрат',
        speciality: '09.02.07 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['1 место, по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2023 год']
    },
    {
        element: document.createElement('div'),
        title: 'Коротких Наталья',
        speciality: '09.02.07 Информационные системы и программирование',
        experting: '',
        competition_results: ['1 место по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год']
    },
    {
        element: document.createElement('div'),
        title: 'Выдрин Семён',
        competition_results: ['Эксперт чемпионата по компетенции «ИТ-решения для бизнеса на платформе «1С:Предприятие 8», г.Вятские Поляны – февраль 2022, март 2023 год']
    },
    {
        element: document.createElement('div'),
        title: 'Шмыров Егор',
        speciality: '09.02.07 Программирование в компьютерных системах',
        experting: '',
        competition_results: ['3 место по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год','<br>', 
        'участник по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2023 год']
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
        const expert = document.createElement('li');
        expert.className = 'special_student_3';

        const special_student_p1 = document.createElement('p');
        special_student_p1.className = 'special_student-p';
        special_student_p1.innerHTML = `<a class="text-members_purple__color">Специальность: </a><a class="progr-speciality_p">${member.speciality}</a>`;

        const special_student_p2 = document.createElement('p');
        special_student_p2.className = 'special_student-p';
        special_student_p2.innerHTML = `<a class="text-members_purple__color">Участие в конкурсах: </a>`;

        const special_student_p3 = document.createElement('p');
        special_student_p3.className = 'special_student-p';
        special_student_p3.innerHTML = `<a class="text-members_purple__color">Эксперт: </a><a>${member.experting}</a>`;

        const special_student_results = document.createElement('li');
        special_student_results.className = 'special_student_results';
        member.competition_results.forEach((item) => {
            const special_student_p = document.createElement('p');
            special_student_p.className = 'special_student-p';
            const twenty_competition = document.createElement('a');
            twenty_competition.className = 'twenty-19-competition';
            twenty_competition.innerHTML = item
            special_student_p.appendChild(twenty_competition)
            special_student_results.appendChild(special_student_p);
        });

        // append children
        expert.appendChild(special_student_p3);
        competition.append(special_student_p2);
        speciality.appendChild(special_student_p1);
        membersInfo.append(speciality, competition, special_student_results, expert);
        // ^ - expert
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
    // special_window_size.forEach((item) => {
    //     // if (window.innerWidth < 2100 && window.innerWidth > 1150) {
    //     //     item.textContent = Object.values(speciality);
    //     // }
    //     if (window.innerWidth <= 1150) {
    //         item.innerHTML = '<abbr style="text-decoration: underline;" title="Программирование в компьютерных системах">09.02.03</abbr>';
    //     }
    // });

    document.querySelector('#result-members-compet_text') = () => {
        if (window.innerWidth < 500) {
            document.querySelector('#result-members-compet_text').textContent = 'Результаты';
        }
    }
}

window.onload = changeTextBasedOnScreenWidth;
window.onresize = changeTextBasedOnScreenWidth;