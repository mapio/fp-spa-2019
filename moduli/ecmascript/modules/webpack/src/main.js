import './main.css';

import {changeTo} from './lib.js';
import axios from 'axios';

window.addEventListener('load', () => {
    changeTo(document.getElementsByTagName('h1')[0], 'Loaded');
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then(resp => {
        let output = document.getElementById('output');
        output.innerText = JSON.stringify(resp.data, null, '\t');
    
    });
});