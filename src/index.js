import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import {murkupListCountries} from "./js/tamplateMurkup.js";
import{murkupCountryInfo} from "./js/tamplateMurkup.js";

import {fetchCountries} from './js/fetchCountries.js';
import {getCountryOnInput} from "./js/clickNameCountry.js";
import {refs} from "./js/refsElement.js"



const {inputEl, listEl, divEl, body} = refs;

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener("input", debounce(onInputCountryName, DEBOUNCE_DELAY));
body.addEventListener('click', getCountryOnInput);

function onInputCountryName(e) {

    const inputValue = inputEl.value.trim();
       
    if(inputValue === '')
    {
        divEl.innerHTML = '';  
        listEl.innerHTML = '';
        return
    }
    getInputСountry(inputValue);
}


function getInputСountry (inputValue){
       
   
    fetchCountries(inputValue)
    .then(сountrys => {

        if(сountrys.length > 10){
            Notify.info('Too many matches found. Please enter a more specific name.');
            divEl.innerHTML = '';  
            listEl.innerHTML = '';
        }

        if(сountrys.length <=10){
            const listMurkup = сountrys.map(сountry => 
            murkupListCountries(сountry));
            divEl.innerHTML = '';  
            listEl.innerHTML = listMurkup.join('');
        }

        if(сountrys.length === 1){
            const listMurkup = сountrys.map(сountry => 
                murkupCountryInfo(сountry));
            listEl.innerHTML = '';    
            divEl.innerHTML = listMurkup.join('');
        }
       
    
    })
   .catch(err =>{
    Notify.failure('Oops, there is no country with that name');
    divEl.innerHTML = '';  
    listEl.innerHTML = '';
    return err;
   })
    
}


