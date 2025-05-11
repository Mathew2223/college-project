const members_section = document.getElementById('members');
// members blocks
let members = [
    {
        element: document.createElement('div'),
        title: 'Радыгин Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://aviakat.ru/downloads/rumo/olimp/o_ved.pdf',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: ['<span class="silver_color">2 место</span> во Всероссийской олимпиаде профессионального мастерства 2019 год '],
        // bb_year: 'Год выпуска:'
    },
    {
        element: document.createElement('div'),
        title: 'Седов Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://vk.com/wall-24316094_3275?ysclid=m3ninxj0vo565605635',
        photo_href: ['members_photos/sedov.jpg'],
        experting: 'А.А.Махнёв',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2021 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Черных Александр',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11793?ysclid=m3nhgcz1th593378480',
        photo_href: ['members_photos/chernih.jpg'],
        experting: '',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2020 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Екимова Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11793?ysclid=m3nhgcz1th593378480',
        photo_href: ['members_photos/ekimova.jpg'],
        experting: '',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции «ИТ-решения для бизнеса на платформе «1С:Предприятие 8»» – февраль 2020 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Порошина Дарья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://vk.com/wall-24316094_3275?ysclid=m3ninxj0vo565605635',
        photo_href: ['members_photos/poroshina.jpg', 'members_photos/poroshina2.jpg'],
        experting: 'А.С.Бобров',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2021 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Бобров Антон',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11622?ysclid=m3nhp5klre516209245',
        photo_href: ['members_photos/bobrov.jpg'],
        experting: '',
        competition_results: ['Медальон «За профессионализм» по компетенции «ИТ - решения для бизнеса на платформе "1С: Предприятие 8"», г.Вятские Поляны – февраль 2019 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Бутин Артем',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://vk.com/wall-24316094_4370?ysclid=m3v9uf465f986520444',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – февраль 2022 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Калинин Арсений',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://vk.com/wall-24316094_4370?ysclid=m3v9uf465f986520444',
        // 2 место - https://vk.com/wall-24316094_6450?ysclid=m3v9ssfyj6720591635
        photo_href: [],
        experting: 'С.Т.Выдрина',
        competition_results: ['<span class="brown_color">3 место</span> по компетенции "ИТ-решения для бизнеса на платформе 1С", г.Вятские Поляны – февраль 2022 год ']
        // competition_results2: '<span class="silver_color">2 место</span>, по компетенции «Разработка мобильных приложений», г.Киров –март 2023'
    },
    {
        element: document.createElement('div'),
        title: 'Хамидуллин Айрат',
        speciality: '09.02.07 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/12337?ysclid=m3ni15wj17202705121',
        photo_href: ['members_photos/hamidullin.jpeg'],
        experting: '',
        competition_results: [`<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2023 год `]
    },
    {
        element: document.createElement('div'),
        title: 'Коротких Наталья',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://slobkoll.ru/news/1013/66/regionalnyj-etap-chempionata-po-professionalnomu-masterstvu-professionaly/',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: ['<span class="gold_color">1 место</span> по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год ']
    },
    {
        element: document.createElement('div'),
        title: 'Выдрин Семён',
        href: '',
        photo_href: [],
        competition_results: ['Эксперт чемпионата по компетенции «ИТ-решения для бизнеса на платформе «1С:Предприятие 8», г.Вятские Поляны – февраль 2022, март 2023 год '],
        experting: ''
    },
    {
        element: document.createElement('div'),
        title: 'Шмыров Егор',
        speciality: '09.02.07 Программирование в компьютерных системах',
        href: 'https://slobkoll.ru/news/1013/66/regionalnyj-etap-chempionata-po-professionalnomu-masterstvu-professionaly/',
        photo_href: [],
        experting: 'Н.С.Пентин',
        competition_results: ['<span class="brown_color">3 место</span>  по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2024 год','<br>', 
        'участник по компетенции "Программные решения для бизнеса", г.Вятские Поляны – март 2023 год ']
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

        const info_button = document.createElement('button');
        info_button.className = 'info_button'
        info_button.innerHTML = `<a style="font-size: 16px;" class="special_student-p" href="${member.href}" target="_blank">Подробнее</a>`

        const special_student_results = document.createElement('li');
        special_student_results.className = 'special_student_results';

        member.competition_results.forEach((item) => {
            const special_student_p = document.createElement('p');
            special_student_p.className = 'special_student-p';
            const twenty_competition = document.createElement('span');
            twenty_competition.innerHTML = item;
            special_student_p.append(twenty_competition, info_button);
            special_student_results.appendChild(special_student_p);
        });

        // Блок кода для competition_photo
        const competitionPhotosDiv = document.createElement('div');
        competitionPhotosDiv.className = 'competition_photos';

        member.photo_href.forEach(function(photo) { // Use the array
            const competitionPhotoImg = document.createElement('img');
            competitionPhotoImg.className = 'competition_photo';
            competitionPhotoImg.src = photo; // Set source from array

            competitionPhotoImg.onclick = function() {
                openPopup(this.src);
            };

            competitionPhotosDiv.appendChild(competitionPhotoImg);
                
            const popupDiv = document.createElement('div');
            popupDiv.className = 'popup';
            popupDiv.id = 'popup';
            popupDiv.onclick = closePopup;
    
            const popupImg = document.createElement('img');
            popupImg.id = 'popup-img';
            popupImg.src = '';
            popupImg.alt = '';
    
            popupDiv.appendChild(popupImg);
            competitionPhotosDiv.appendChild(popupDiv);
        });

        // append children
        expert.appendChild(special_student_p3);
        competition.append(special_student_p2);
        speciality.appendChild(special_student_p1);
        membersInfo.append(speciality, competition, special_student_results, expert);
        (member.photo_href.length != 0) ? membersInfo.append(speciality, competition, special_student_results, competitionPhotosDiv, expert) : membersInfo.append(speciality, competition, special_student_results, expert);
        
        
        // ^ - expert
        seperator.appendChild(seperatorGradient);
        biography_block.append(img, seperator, title);
        member.element.appendChild(biography_block);
        member.element.appendChild(membersInfo);
        members_section.append(member.element);
    });
});

// const competition_photos = document.createElement('div');
// competition_photos.className = 'competition_photos';
// const popup_photos = document.createElement('div');
// popup_photos.className = 'popup';
// const popup_img = document.createElement('img');
// popup_img.className = 'competition_photo';
// const popup_img_js = document.createElement('img');
// popup_img_js.id = 'popup-img';
// popup_photos.appendChild(popup_img_js);

// function on basedScreenWidth
function changeTextBasedOnScreenWidth() {
    const name_of_place_competition = document.querySelectorAll('.name_of_place-competition');
    name_of_place_competition.forEach((element) => {
        if (window.innerWidth < 1768) {
            element.textContent = 'КОГПОБУ СКПиСО';
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