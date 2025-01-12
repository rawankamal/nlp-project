import './views/public/style.scss';
import { handleFormSubmit } from './views/js/handleSubmit';

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', handleFormSubmit);
});