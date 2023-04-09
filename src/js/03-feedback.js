import throttle from 'lodash.throttle';

// посилання
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};


// змінна для ключа
const LOCALSTORAGE_KEY = 'feedback-form-state';

const FormData = {};

// слухачі
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//     console.log(e.target.name);
//     console.log(e.target.value);

    
//     FormData[e.target.name] = e.target.value
// });

// визов методу
populateTextarea();

// методи
function onFormSubmit(evt) {
    // підчас сабмітуб, зазамовчуванням, сторінка оновлюється, відключаємо цю функцію, та всі інші.
    evt.preventDefault()
    // видається при натисканні на кнопку сабміта
    // console.log("done!!!")
    // через те що, у сабміті, ми вимкнули всі властивості за замовчуванням, додаємо метод оновлення
    evt.currentTarget.reset();
    // видаляємо 
    localStorage.removeItem(LOCALSTORAGE_KEY)
};

function onTextareaInput(evt) {
    const messageInputValue = evt.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, messageInputValue);
    // console.log(messageInputValue);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)

    // перевірка
    if (savedMessage) {
        const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    };
};