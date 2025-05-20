const members_section = document.getElementById('members');
// members blocks
let members = [
    {
        element: document.createElement('div'),
        title: 'Радыгин Евгений',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://aviakat.ru/downloads/rumo/olimp/o_ved.pdf',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: [`
            «Всероссийская олимпиада профессионального мастерства»
            <span class="text-members_hex_purple__color">Результат: </span><span class="silver_color">2 место </span>
        `],
        student_results_year: ['<p class="special_student-p_year">2019 год</p>']
        // bb_year: 'Год выпуска:'
    },
    {
        element: document.createElement('div'),
        title: 'Седов Алексей',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://vk.com/wall-24316094_3275?ysclid=m3ninxj0vo565605635',
        photo_href: ['members_photos/sedov.jpg'],
        experting: 'А.А.Махнёв',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="brown_color">3 место </span></span> <br>
        `],
        student_results_year: ['<p class="special_student-p_year">2021 год</p>'] 
    },
    {
        element: document.createElement('div'),
        title: 'Черных Александр',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11793?ysclid=m3nhgcz1th593378480',
        photo_href: ['members_photos/chernih.jpg'],
        experting: '',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="brown_color">3 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2020 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Екимова Наталья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11793?ysclid=m3nhgcz1th593378480',
        photo_href: ['members_photos/ekimova.jpg'],
        experting: '',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «ИТ-решения для бизнеса на платформе «1С:Предприятие 8»<br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="gold_color">1 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2020 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Порошина Дарья',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://vk.com/wall-24316094_3275?ysclid=m3ninxj0vo565605635',
        photo_href: ['members_photos/poroshina.jpg', 'members_photos/poroshina2.jpg'],
        experting: 'А.С.Бобров',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span>  «ИТ-решения для бизнеса на платформе 1С» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="brown_color">3 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2021 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Бобров Антон',
        speciality: '09.02.03 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/11622?ysclid=m3nhp5klre516209245',
        photo_href: ['members_photos/bobrov.jpg'],
        experting: '',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса на платформе «1С:Предприятие 8»<br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span style="color: #1B263B;" class="twenty-19-competition">Медальон «За профессионализм» </span>
        `],
        student_results_year: ['<p class="special_student-p_year">2019 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Бутин Артем',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://vk.com/wall-24316094_4370?ysclid=m3v9uf465f986520444',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="gold_color">1 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2022 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Калинин Арсений',
        speciality: '09.02.07 Информационные системы и программирование',
        href: ['https://vk.com/wall-24316094_6450?ysclid=m3v9ssfyj6720591635'],
        photo_href: [],
        experting: 'С.Т.Выдрин',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «ИТ-решения для бизнеса на платформе 1С»
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="brown_color">3 место </span></span> <button class="info_button"><a style="font-size: 16px;" class="special_student-p" href="https://vk.com/wall-24316094_4370?ysclid=m3v9uf465f986520444" target="_blank">Подробнее</a></button></p>`, 
            `<span class="text-members_hex_purple__color">Компетенция:</span> «Разработка мобильных приложений» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Киров<br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="silver_color">2 место </span></span> 
        `],
        student_results_year: ['<p class="special_student-p_year">2022 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Хамидуллин Айрат',
        speciality: '09.02.07 Программирование в компьютерных системах',
        href: 'https://www.vpmt.ru/node/12337?ysclid=m3ni15wj17202705121',
        photo_href: ['members_photos/hamidullin.jpeg'],
        experting: '',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="gold_color">1 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2023 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Коротких Наталья',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://slobkoll.ru/news/1013/66/regionalnyj-etap-chempionata-po-professionalnomu-masterstvu-professionaly/',
        photo_href: [],
        experting: 'А.А.Махнёв',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="gold_color">1 место </span></span>
        `],
        student_results_year: ['<p class="special_student-p_year">2024 год</p>']
    },
    {
        element: document.createElement('div'),
        title: 'Выдрин Семён',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://slobkoll.ru/uploads/masterskie/uch22.pdf',
        photo_href: [],
        competition_results: [`
        <span class="text-members_hex_purple__color">Компетенция: </span>«ИТ-решения для бизнеса на платформе «1С:Предприятие 8»<br>
        <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
        <span class="text-members_hex_purple__color">Эксперт</span> чемпионата
        `],
        student_results_year: ['<p class="special_student-p_year">2022 / 23 год</p>'],
        experting: ''
    },
    {
        element: document.createElement('div'),
        title: 'Шмыров Егор',
        speciality: '09.02.07 Информационные системы и программирование',
        href: 'https://slobkoll.ru/news/1013/66/regionalnyj-etap-chempionata-po-professionalnomu-masterstvu-professionaly/',
        photo_href: [],
        experting: 'Н.С.Пентин',
        competition_results: [`
            <span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span class="twenty-19-competition"><span class="brown_color">3 место </span></span> <br>`,
            `<span class="text-members_hex_purple__color">Компетенция:</span> «Программные решения для бизнеса» <br>
            <span class="text-members_hex_purple__color">Место проведения:</span> г.Вятские Поляны <br>
            <span class="text-members_hex_purple__color">Результат: </span><span style="color: #1B263B;" class="twenty-19-competition">Участие</span>
        `],
        student_results_year: ['<p class="special_student-p_year">2023 год</p>'],
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
        special_student_p3.innerHTML = `<a class="text-members_purple__color">Наставник: </a><a>${member.experting}</a>`;

        const special_student_results_year = document.createElement('li');
        special_student_results_year.className = 'special_student_results_year';
        special_student_results_year.innerHTML = member.student_results_year;

        const info_button = document.createElement('button');
        info_button.className = 'info_button'
        info_button.innerHTML = `<a style="font-size: 16px;" class="special_student-p" href="${member.href}" target="_blank">Подробнее</a>`

        const special_student_results = document.createElement('ul');
        member.competition_results.forEach((item) => {
            const special_student_results2 = document.createElement('li');
            special_student_results2.className = 'special_student_results';

            const special_student_p = document.createElement('p');
            special_student_p.className = 'special_student-p';

            const twenty_competition = document.createElement('span');
            twenty_competition.innerHTML = item;

            special_student_p.append(twenty_competition, info_button);
            special_student_results2.append(special_student_p);
            special_student_results.appendChild(special_student_results2)
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
        // membersInfo.append(speciality, competition, special_student_results, special_student_results_year, expert, );
        (member.photo_href.length != 0) ? membersInfo.append(speciality, competition, special_student_results_year, special_student_results, competitionPhotosDiv, expert) : membersInfo.append(speciality, competition, special_student_results_year, special_student_results, expert);
        
        
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

    document.querySelector('#result-members-compet_text') = () => {
        if (window.innerWidth < 500) {
            document.querySelector('#result-members-compet_text').textContent = 'Результаты';
        }
    }
}

window.onload = changeTextBasedOnScreenWidth;
window.onresize = changeTextBasedOnScreenWidth;