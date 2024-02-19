import axios from "axios";
import "izitoast/dist/css/iziToast.min.css";
import { refs, onError, LIMIT, loaderOff, loaderOn } from "../main";
import { makeGalleryItem, totalHits, lightbox } from './render-functions';
import { MESSAGE } from "../main";

export const perPage = 15;
export let page;
export let userSearch;

export async function fetchImg(userInput) {
    loaderOn();
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const API_KEY = '42320783-7d0430ad6756cac4c8b613a39';
    const PARAMS = `q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;
    const URL = `?key=${API_KEY}&${PARAMS}`;

    const config = {
        params: {
            per_page: perPage,
            page: page,
        },
    };

    const res = await axios.get(URL, config);
    return res.data;
}

export async function onFormSubmit(event) {
    event.preventDefault();
    loaderOn();
    refs.btnLoad.classList.add('hidden');

    refs.galleryList.innerHTML = '';
    page = 1;
    userSearch = event.target.elements.input.value.trim();
    if (userSearch) {
      try {
        const responce = await fetchImg(userSearch);
        const item = makeGalleryItem(responce);
        return item;
      } catch (error) {
        onError(MESSAGE);
      } finally {
        loaderOff();
        refs.userForm.reset();
      }
    } else {
      refs.userForm.elements.input.value = '';
      onError(CORRECT);
    }
  }

export async function onLoadClick() {
    page += 1;
    const maxPage = Math.ceil(totalHits / perPage);
    if (page >= maxPage) {
        refs.btnLoad.classList.add('hidden');
        onError(LIMIT);
    } else {
        const result = await fetchImg(userSearch);
        const element = makeGalleryItem(result);
        scrollPage();
        loaderOff();
        lightbox.refresh();
        return element;
    }
}

function scrollPage() {
    const rect = refs.galleryList.firstElementChild.getBoundingClientRect();
    const size = rect.height * 2;
    window.scrollBy({top: size, left: 0, behavior: 'smooth'});
}