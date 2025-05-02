const members_section = document.getElementById('members');
// members blocks
let members = [
    {
        element: document.createElement('div'),
        title: 'Радыгин Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://aviakat.ru/downloads/rumo/olimp/o_ved.pdf',
        experting: 'А.А. Махнев',
        competition_results: ['<span class="silver_color">2 место</span> во Всероссийской олимпиаде профессионального мастерства 2019 год'],
        // bb_year: 'Год выпуска:'
    },
    {
        element: document.createElement('div'),
        title: 'Седов Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://goo.su/B7hGGVv',
        experting: 'А.А. Махнев',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2021 год']
    },
    {
        element: document.createElement('div'),
        title: 'Черных Александр',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://goo.su/mmywkB',
        experting: '',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2020 год']
    },
    {
        element: document.createElement('div'),
        title: 'Екимова Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://goo.su/Wvy7R',
        experting: '',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции «ИТ-решения для бизнеса на платформе «1С:Предприятие 8»» – февраль 2020 год']
    },
    {
        element: document.createElement('div'),
        title: 'Порошина Дарья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://goo.su/kmjIDB',
        experting: '',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2021 год']
    },
    {
        element: document.createElement('div'),
        title: 'Бобров Антон',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://goo.su/RPtg',
        experting: '',
        competition_results: ['Медальон «За профессионализм» по компетенции «ИТ - решения для бизнеса на платформе "1С: Предприятие 8"», г.Вятские Поляны – февраль 2019 год']
    },
    {
        element: document.createElement('div'),
        title: 'Бутин Артем',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://goo.su/qr5Tta',
        experting: '',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2022 год']
    },
    {
        element: document.createElement('div'),
        title: 'Калинин Арсений',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://vk.com/wall-24316094_4370?ysclid=m3v9uf465f986520444',
        // 2 место - https://vk.com/wall-24316094_6450?ysclid=m3v9ssfyj6720591635
        experting: '',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2022 год']
        // competition_results2: '<span class="silver_color">2 место</span>, по компетенции «Разработка мобильных приложений», г.Киров –март 2023'
    },
    {
        element: document.createElement('div'),
        title: 'Хамидуллин Айрат',
        speciality: '09.02.07 Программирование в компьютерных системах',
        href: 'https://goo.su/Yk6Z',
        experting: '',
        competition_results: [`<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2023 год`]
    },
    {
        element: document.createElement('div'),
        title: 'Коротких Наталья',
        speciality: '09.02.07 Информационные системы и программирование',
        href: '',
        experting: '',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год']
    },
    {
        element: document.createElement('div'),
        title: 'Выдрин Семён',
        href: '',
        competition_results: ['Эксперт чемпионата по компетенции «ИТ-решения для бизнеса на платформе «1С:Предприятие 8», г.Вятские Поляны – февраль 2022, март 2023 год']
    },
    {
        element: document.createElement('div'),
        title: 'Шмыров Егор',
        speciality: '09.02.07 Программирование в компьютерных системах',
        href: '',
        experting: '',
        competition_results: ['<span class="brown_color">3 место</span>  по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год','<br>', 
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
            const special_student_p = document.createElement('a');
            special_student_p.href = member.href
            special_student_p.setAttribute('target', '_blank');
            special_student_p.className = 'special_student-p__purple';
            const twenty_competition = document.createElement('a');
            twenty_competition.innerHTML = item;
            special_student_p.appendChild(twenty_competition);
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

    // const special_window_size = document.querySelectorAll('.progr-speciality_p');
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