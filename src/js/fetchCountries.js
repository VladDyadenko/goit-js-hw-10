
const baseUrl = 'https://restcountries.com/v3.1/name/';
const filterRequest = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
    
    
    return fetch(`${baseUrl}${name}${filterRequest}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      
      return response.json();
    });
  }


