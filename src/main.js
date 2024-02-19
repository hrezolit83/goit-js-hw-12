// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import  './js/pixabay-api';
import './js/render-functions';
import { onFormSubmit, onLoadClick } from './js/pixabay-api';

export const refs = {
    userForm: document.querySelector('.user-form'),
    userInput: document.querySelector('.user-input'),
    btn: document.querySelector('.form-button'),
    galleryList: document.querySelector('.gallery'),
    container: document.querySelector('.container'),
    loader: document.querySelector('.loader'),
    btnLoad: document.querySelector('.btn-load'),
  };

  refs.userForm.addEventListener('submit', onFormSubmit);
  refs.btnLoad.addEventListener('click', onLoadClick);

  export function loaderOn() {
    refs.loader.classList.remove('hidden');
  }
  
  export function loaderOff() {
    refs.loader.classList.add('hidden');
  }

  export function onError(message) {
    iziToast.error({
    message: message,
    position: 'topRight',
    });
}

      export const LIMIT = "We're sorry, but you've reached the end of search results.";
      export const CORRECT = 'Please enter correct information.';
      export const MESSAGE = 'Sorry, there are no images matching your search query. Please try again!';