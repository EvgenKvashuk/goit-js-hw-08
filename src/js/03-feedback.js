// import throttle from 'lodash.throttle';

// // посилання
// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
// };


// // змінна для ключа
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// const FormData = {};

// // слухачі
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);

//     console.log(FormData);
//     FormData[e.target.name] = e.target.value
// });

// // визов методу
// populateTextarea();

// // методи
// function onFormSubmit(evt) {
//     // підчас сабмітуб, зазамовчуванням, сторінка оновлюється, відключаємо цю функцію, та всі інші.
//     evt.preventDefault()
//     // видається при натисканні на кнопку сабміта
//     // console.log("done!!!")
//     // через те що, у сабміті, ми вимкнули всі властивості за замовчуванням, додаємо метод оновлення
//     evt.currentTarget.reset();
//     // видаляємо 
//     localStorage.removeItem(LOCALSTORAGE_KEY)
// };

// function onTextareaInput(evt) {
//     const messageInputValue = evt.target.value;

//     localStorage.setItem(LOCALSTORAGE_KEY, messageInputValue);

//     localStorage.setItem(LOCALSTORAGE_KEY, messageInputValue);
//     // console.log(messageInputValue);
// };

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)

//     // перевірка
//     if (savedMessage) {
//         const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     };
// };





import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    // email: document.querySelector('.email'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';
const FormData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    FormData[e.target.name] = e.target.value

    // console.log(FormData);

});

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
};

function onTextareaInput(evt) {
    const FormDataString = JSON.stringify(FormData);
    console.log(FormDataString);
    // const messageInputValue = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, FormDataString);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    const parseObject = JSON.parse(savedMessage);
    refs.textarea.value = parseObject.message;
    refs.form.elements.email = parseObject.message;
};