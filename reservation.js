
window.addEventListener('DOMContentLoaded', () => {

    const dateForm = document.getElementById('dateForm');
    const dateInput = document.createElement('input');
    dateInput.id = 'dateInput';
    dateInput.type = 'date';
    dateInput.required;
    dateForm.appendChild(dateInput);

    let today = new Date();
    dateInput.value = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${today.getDate()}`;

    const timeWrapper = document.getElementById('timeWrapper');

    let timeValue = '';

    let hour = 10;
    let min = 30;

    for (let i = 0; i < 20; i++) {
        const time = document.createElement('div');
        time.id = `time${i}`;
        time.className = 'time';
        time.status = false;
        time.disabled = false;
        timeWrapper.appendChild(time);

        const addHour = Math.floor((min * i) / 60);
        time.value = `${hour + addHour}:${('0' + (min * i) % 60).slice(-2)}`;
        time.innerText = `${hour + addHour}:${('0' + (min * i) % 60).slice(-2)}`;
    }

    for (let i = 0; i < 20; i++) {
        const time = document.getElementById(`time${i}`);

        time.addEventListener('click', checkColor);

        function checkColor() {
            if (time.status === false) {
                Activate();
            } else {
                deActivate();
            }
        }

        function Activate() {
            for (let h = 0; h < 20; h++) {
                const time = document.getElementById(`time${h}`);
                time.style.backgroundColor = 'white';
                time.style.color = '#333';
                time.status = false;
            }
            time.style.backgroundColor = '#333';
            time.style.color = 'white';
            time.status = true;
            timeValue = time.value;
        }

        function deActivate() {
            time.style.backgroundColor = 'white';
            time.style.color = '#333';
            time.status = false;
        }
    }

    const save = document.getElementById('save');

    save.addEventListener('click', viewPop)

    function viewPop() {
        const main = document.querySelector('main');
        const popBack = document.createElement('div');
        popBack.id = 'popBack';
        main.appendChild(popBack);

        const popup = document.createElement('div');
        popup.id = 'popup';
        popBack.appendChild(popup);

        const comment = document.createElement('span');
        comment.id = 'comment';
        comment.innerText = '????????? ?????? ?????????????????????????';
        popup.appendChild(comment);

        const valueContainer = document.createElement('div');
        popup.appendChild(valueContainer);

        const dateValue = document.createElement('div');
        const date = new Date(dateInput.value);
        const day = ['???', '???', '???', '???', '???', '???', '???'];
        dateValue.innerText = `${date.getMonth() + 1}??? ${date.getDate()}??? ${day[date.getDay()]}?????? ${timeValue.slice(0, 2)}??? ${timeValue.slice(-2)}???`;
        valueContainer.appendChild(dateValue);

        const personValue = document.createElement('div');

        valueContainer.appendChild(personValue);
        const adultInput = document.getElementById('adultInput');
        const kidsInput = document.getElementById('kidsInput');

        if (kidsInput.value === '') {
            personValue.innerText = `?????? ${adultInput.value}??? ??? ${adultInput.value * 1}???`;
        } else {
            personValue.innerText = `?????? ${adultInput.value}???, ?????? ${kidsInput.value}??? ??? ${adultInput.value * 1 + kidsInput.value * 1}???`;
        }

        const confirm = document.createElement('div');
        confirm.id = 'confirm';
        confirm.innerText = '??????';
        popup.appendChild(confirm);

        confirm.addEventListener('click', sendMessage);

        function sendMessage() {
            comment.remove();
            valueContainer.remove();
            confirm.remove();

            popup.innerText = '????????? ?????????????????????. ???????????????.';

            const returnButton = document.createElement('div');
            returnButton.id = 'returnButton';
            popup.appendChild(returnButton);

            const anchor = document.createElement('a');
            anchor.href="./index.html";
            returnButton.appendChild(anchor);
            anchor.innerText = '????????????';
        }
    }
});
