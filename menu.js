const menus = [
    {
        'name': '두부전골',
        'price': 7000,
        'img': 'images/두부전골.jpg'
    },
    {
        'name': '청국장',
        'price': 7000,
        'img': 'images/청국장.jpg'
    },
    {
        'name': '두부제육볶음',
        'price': 15000,
        'img': 'images/두부제육볶음.jpg'
    },
    {
        'name': '메밀묵무침',
        'price': 15000,
        'img': 'images/메밀묵무침.jpg'
    },
    {
        'name': '묵밥',
        'price': 7000,
        'img': 'images/묵밥.jpg'
    },
    {
        'name': '비지튀김',
        'price': 7000,
        'img': 'images/비지튀김.jpg'
    },
    {
        'name': '태평초',
        'price': 7000,
        'img': 'images/태평초.jpg'
    },
    {
        'name': '된장찌개',
        'price': 7000,
        'img': 'images/된장찌개.jpg'
    }
]

window.addEventListener('DOMContentLoaded', () => {

    addMenu();
    navMenu();

    function addMenu() {
        const itemContainer = document.getElementById('itemContainer');

        for (let i = 0; i < menus.length; i++) {
            const figure = document.createElement('figure');
            figure.id = `figure${i}`;
            itemContainer.appendChild(figure);

            const img = document.createElement('img');
            img.id = `pic${i}`;
            img.src = menus[i].img;
            img.className = 'menuImage';
            figure.appendChild(img);

            const menuName = document.createElement('figcaption');
            menuName.id = `menu${i}`;
            menuName.className = 'menuName';
            menuName.innerText = menus[i].name;
            figure.appendChild(menuName);

            const price = document.createElement('figcaption');
            const priceToString = menus[i].price.toString();
            price.id = `price${i}`;
            price.innerText = `${priceToString.slice(0, priceToString.length - 3)},${priceToString.slice(-3)}원`;
            price.className = 'price';
            figure.appendChild(price);
        }
    }

    function navMenu() {
        const navMenu = document.createElement('div');
        navMenu.id = 'navMenu';

        const main = document.getElementById('main');
        main.appendChild(navMenu);

        const menuList = [{'name':'메뉴', 'href': '#menu'}, {'name':'방문예약', 'href':'./reservation.html'},{'name':'오시는길', 'href':'#map'} ];

        const ul = document.createElement('ul');
        navMenu.appendChild(ul);

        for (let i = 0; i < menuList.length; i++) {
            
            const list = document.createElement('li');
            list.id = `list${i}`;
            ul.appendChild(list);

            const anchor = document.createElement('a');
            anchor.href = menuList[i].href;
            anchor.innerText = menuList[i].name;
            list.appendChild(anchor);

            list.addEventListener('click',displayChecker);
        }

    }

    const navButton = document.getElementById('navButton');
    navButton.addEventListener('click', displayChecker);

    function displayChecker(){
        const navMenu = document.getElementById('navMenu');
        if(navMenu.style.right === '0px'){
            closeNavMenu();
        } else {
            showNavMenu();
        }
    }

    function showNavMenu() {
        const navMenu = document.getElementById('navMenu');
        navMenu.style.right = '0px';
        navMenu.style.transition= 'linear 0.2s';
    }

    function closeNavMenu(){
        const navMenu = document.getElementById('navMenu');
        navMenu.style.right = '-200px';
        navMenu.style.transition= 'linear 0s';
    }
})