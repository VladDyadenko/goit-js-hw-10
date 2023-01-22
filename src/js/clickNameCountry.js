import {refs} from "./refsElement.js"
import {fetchCountries} from './fetchCountries.js';
import{murkupCountryInfo} from "./tamplateMurkup.js";


const {inputEl, listEl, divEl, body} = refs;

// Вибір кліком однієї країни із списку

export function getCountryOnInput(e){

    
    if(e.target.className === 'country-list__name') {
                        
           inputEl.value = e.target.outerText;
              
            fetchCountries(e.target.outerText)
            
            .then(сountrys => {
                if(сountrys.length === 1){
                    const listMurkup = сountrys.map(сountry => 
                        murkupCountryInfo(сountry));
                    listEl.innerHTML = '';    
                    divEl.innerHTML = listMurkup.join('');
                }
            })
            .catch(err =>{
                Notify.failure('Oops, there is no country with that name');
                return err;
               })
    } 
    else return;
    inputEl.value = '';

}
     
// додавання та зняття класу "isActiv-js" при наведенні 
// курсором миші на країну в списку

body.addEventListener('mouseover', mouseIsActivNameCountry);
body.addEventListener('mouseout', mouseIsInactiveNameCountry);

function mouseIsActivNameCountry (e) {
    

    if(e.target.className === 'country-list__name'){
        
        e.target.parentNode.classList.add("isActiv-js");
        
    } else return;
 
}
function mouseIsInactiveNameCountry(e){
    
    if(e.target.className === 'country-list__name'){
        
        e.target.parentNode.classList.remove("isActiv-js");
        
    } else return;
}