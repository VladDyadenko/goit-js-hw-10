
export function murkupListCountries({ flags, name }) {
return `
<li class="country-list__item">
<img class="country-list__img" src="${flags.svg}" alt="${name.official}" width="40" />
<h2 class="country-list__name">${name.official}</h2>
</li>
`;
}

export function murkupCountryInfo({ flags, name, capital, population, languages }) {
    return `
    <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
    <h2 class="country-info__name">${name.official}</h2>
    <p class="country-info__capital"><span class="country-info__weight">Capital:</span> ${capital}</p>
    <p class="country-info__population"><span class="country-info__weight">Population:</span> ${population}</p>
    <p class="country-info__languages"><span class="country-info__weight">Languages:</span> ${Object.values(
      languages,
    )}</p>
    `;
}


