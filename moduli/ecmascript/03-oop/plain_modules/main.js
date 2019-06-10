import {changeTo} from './lib.js'

window.addEventListener('load', () => {
    changeTo(document.getElementsByTagName('h1')[0], 'Loaded');
});