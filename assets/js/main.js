import { initNavbar } from './modules/navbar.js';
import { initLightbox } from './modules/lightbox.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLightbox();
    console.log('App initialized module-wise');
});
